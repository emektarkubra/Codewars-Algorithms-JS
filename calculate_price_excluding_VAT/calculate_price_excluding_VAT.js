//return price without vat
function excludingVatPrice(price) {
  return price == null
    ? -1
    : Number.isInteger((price * 100) / 115)
    ? (price * 100) / 115
    : Number(((price * 100) / 115).toFixed(2));
}
