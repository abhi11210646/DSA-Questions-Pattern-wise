package main

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

func maxProfit(prices []int) int {

	buyPrice := prices[0]
	maxProfit := 0

	for _, sellPrice := range prices {
		profit := sellPrice - buyPrice

		if profit > maxProfit {
			maxProfit = profit
		}

		if sellPrice < buyPrice {
			buyPrice = sellPrice
		}

	}
	return maxProfit
}
