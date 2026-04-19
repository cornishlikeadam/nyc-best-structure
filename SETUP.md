# NYC Best Structure — Setup & Launch Checklist

## 1. LOCAL DEV
```bash
cd ~/nyc-best-structure
npm install
npm run dev
# Landing page: http://localhost:3000
# Reader page:  http://localhost:3000/read
```

## 2. ORDINALS (On-Chain)
1. **Get a wallet**: Xverse or Unisat (ordinal-compatible)
2. **Inscribe parent**: Upload the guide content (or a representative image/HTML) as the parent inscription
3. **Inscribe 100 children**: Each child references the parent — use Gamma's collection tools or `ord` CLI
4. **List on Gamma**: https://gamma.io — create a collection, link parent inscription, set mint price
   - Gamma is free to launch; they take 10% of mint price
   - Buyers pay ~$5 BTC service fee + 546 sats postage + network fees
5. **Alternative**: Magic Eden also supports Ordinals collections

## 3. DEPLOY TO VERCEL
```bash
cd ~/nyc-best-structure
npx vercel
# Follow prompts — link to your Vercel account
# For production: npx vercel --prod
```
- Hobby tier: free
- Pro: $20/mo if you need more

## 4. STRIPE (Physical Sales)
1. Go to https://dashboard.stripe.com/payment-links
2. Create a Payment Link:
   - Product: "NYC Best Structure — Physical Edition"
   - Price: $24 (or your chosen price)
   - Shipping: collect address
   - After payment: redirect to a confirmation page on your site
3. Copy the Payment Link URL → replace `STRIPE_URL` in `src/pages/index.js`
4. Stripe charges: 2.9% + 30¢ per transaction

## 5. LULU DIRECT (Print Fulfillment)
1. Sign up at https://developers.lulu.com
2. Create your booklet:
   - Format: US Trade (6x9) or Digest (5.5x8.5)
   - Interior: standard paper, B&W or color
   - Cover: glossy or matte
3. Upload print-ready PDF (export from the guide content)
4. Set up Lulu Direct API or manual fulfillment:
   - When Stripe webhook fires → create Lulu print order via API
   - Or: manually fulfill from Stripe dashboard + Lulu dashboard

## 6. WIRE IT UP
In `src/pages/index.js`, replace these placeholder values:
- `GAMMA_URL` → your Gamma collection/mint page URL
- `STRIPE_URL` → your Stripe Payment Link URL
- `MINT_PRICE` → actual BTC price
- `PHYSICAL_PRICE` → actual USD price

## 7. SERIES EXPANSION
After NYC sells through:
- Tokyo Best Structure (Vol. 2)
- Public Domain Editions (classic texts, new format)
- Handbooks (topic-specific guides)
Same stack, same flow. Change content, inscribe new parent, new collection.

## COST SUMMARY
| Item | Cost |
|------|------|
| Vercel Hobby | Free |
| Gamma launch | Free (10% of mint revenue) |
| Stripe | 2.9% + $0.30 per sale |
| Lulu printing | ~$4-8 per copy (depends on specs) |
| Inscription fees | Network-dependent (check mempool) |
| Domain (optional) | ~$12/yr |
