import { useNotices } from '../redux/hooks';
import {
  favorite,
  goodHands,
  lostFound,
  myAds,
  sell,
} from '../redux/notices/operations';

export const usePaginate = type => {
  const {
    totalCounts,
    sellNotices,
    lostFoundNotices,
    favoriteNotices,
    goodHandsNotices,
    myAdsNotices,
    pages,
  } = useNotices();

  switch (type) {
    case 'sell':
      return {
        totalCount: totalCounts.sell,
        items: sellNotices,
        update: sell,
        page: pages.sell,
      };
    case 'lost-found':
      return {
        totalCount: totalCounts.lostFound,
        items: lostFoundNotices,
        update: lostFound,
        page: pages.lostFound,
      };
    case 'favorite':
      return {
        totalCount: totalCounts.favorite,
        items: favoriteNotices,
        update: favorite,
        page: pages.favorite,
      };
    case 'good-hands':
      return {
        totalCount: totalCounts.goodHands,
        items: goodHandsNotices,
        update: goodHands,
        page: pages.goodHands,
      };
    case 'my-ads':
      return {
        totalCount: totalCounts.myAds,
        items: myAdsNotices,
        update: myAds,
        page: pages.myAds,
      };
    default:
      return {
        totalCount: totalCounts.sell,
        items: sellNotices,
        update: sell,
        page: pages.sell,
      };
  }
};
