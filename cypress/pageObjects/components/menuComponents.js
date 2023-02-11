class MenuComponents {
  menuIcon() {
    return cy.xpath(
      '(//*[name()="svg"][@class="IconWrapper-module--icon__BcwyJ IconWrapper-module--normal__vM609"])[1]'
    );
  }
  ladiesButton() {
    return cy.xpath('//span[normalize-space()="Ladies"]');
  }
  dressesButton() {
    return cy.xpath('//*[@href="/en_eur/ladies/shop-by-product/dresses.html"]');
  }
}
export default new MenuComponents();
