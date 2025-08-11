import { Transfer } from '../generated/USDx/USDx'
import { BidPlaced } from '../generated/AuctionHouse/AuctionHouse'
import { Auction, VaultPosition } from '../generated/schema'
import { BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export function handleUSDxTransfer(event: Transfer): void {
  const id = event.params.to.toHexString()
  let vp = VaultPosition.load(id)
  if (vp == null) {
    vp = new VaultPosition(id)
    vp.user = event.params.to
    vp.collateralUsd = BigDecimal.fromString('0')
    vp.debtUsd = BigDecimal.fromString('0')
    vp.ltvBps = 0
  }
  vp.updatedAt = event.block.timestamp
  vp.save()
}

export function handleBidPlaced(event: BidPlaced): void {
  const id = event.params.lotId.toHexString()
  let a = Auction.load(id)
  if (a == null) {
    a = new Auction(id)
    a.type = 'Dutch'
    a.payToken = event.address
    a.receiveToken = event.address
    a.payAmount = BigInt.zero()
    a.startPrice = BigInt.zero()
    a.minPrice = BigInt.zero()
    a.startTime = event.block.timestamp
    a.endTime = event.block.timestamp
    a.settled = false
  }
  a.save()
}