// src/lib/launch-offer.ts
// One place for the launch offer, used on the home page and the pricing page.
// Keep these numbers TRUE: update CLAIMED_SPOTS by hand as clients sign up.
// When every spot is taken, the offer sections hide themselves automatically.

export const launchOffer = {
  totalSpots: 5,
  claimedSpots: 0,
  discountPercent: 15,
  /** Set to false to hide the spots counter */
  showSpots: true,
};

export function launchOfferStatus() {
  const { totalSpots, claimedSpots } = launchOffer;
  const remaining = Math.max(totalSpots - claimedSpots, 0);
  return {
    ...launchOffer,
    remaining,
    percentClaimed: totalSpots > 0 ? Math.round((Math.min(claimedSpots, totalSpots) / totalSpots) * 100) : 100,
    isOpen: remaining > 0,
  };
}