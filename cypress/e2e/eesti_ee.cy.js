describe('1. Avalehe testid', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Leht laeb edukalt', () => {
      cy.title().should('include', 'Eesti.ee')
    })
  
    it('Otsinguriba on nähtav ja funktsionaalne', () => {
      cy.get('input[type="search"]').should('be.visible')
    })
  
    it('Peamenüü punktid eksisteerivad', () => {
      cy.contains('Eraisik').should('exist')
      cy.contains('Ettevõtja').should('exist')
      cy.contains('Ametnik').should('exist')
    })
  })
  
  describe('2. Otsingu testid', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Otsib "Eesti hümn" ja leiab tulemused', () => {
      cy.get('input[type="search"]').type('Eesti hümn{enter}')
      cy.contains('Eesti Vabariigi hümn').should('exist')
    })
  
    it('Tühi otsing kuvab veateate', () => {
      cy.get('input[type="search"]').type('{enter}')
      cy.contains('Palun sisesta otsingusõna').should('exist') 
    })
  })
  
  describe('3. Teenuste navigeerimine', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('"Tervis ja retseptid" avamine "Eraisiku" alt', () => {
      cy.contains('Eraisik').click()
      cy.contains('Tervis ja retseptid').click()
      cy.contains('Retseptid').should('exist')
    })
  
    it('"Retseptid" leht laeb korrektselt', () => {
      cy.contains('Retseptid').click()
      cy.url().should('include', 'retseptid')
      cy.contains('Retsepti info').should('exist') 
    })
  
    it('Terviseportaal avaneb uues aknas', () => {
      cy.contains('Terviseportaal').should('have.attr', 'target', '_blank')
    })
  })
  
  describe('4. Kontaktilehe testid', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('"Võtke meiega ühendust" leht avaneb', () => {
      cy.contains('Võtke meiega ühendust').click()
      cy.url().should('include', 'kontakt')
    })
  
    it('Kontaktivorm sisaldab olulisi välju', () => {
      cy.get('input[name="name"]').should('exist')
      cy.get('input[name="email"]').should('exist')
      cy.get('textarea[name="message"]').should('exist')
    })
  
    it('Vigane e-post annab veateate', () => {
      cy.get('input[name="email"]').type('viganeemail')
      cy.get('form').submit()
      cy.contains('Palun sisesta korrektne e-posti aadress').should('exist')
    })
  })
  