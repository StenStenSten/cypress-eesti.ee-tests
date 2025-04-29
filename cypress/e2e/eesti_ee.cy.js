describe('1. Avalehe testid', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Leht laeb edukalt', () => {
    cy.title().should('include', 'Eesti.ee')  
  })

  it('Otsingukast on nähtav ja funktsionaalne', () => {
    cy.get('input[type="text"]', { timeout: 10000 }).should('be.visible')  
  })

  it('Peamenüü punktid "Eraisik" ja "Ettevõtja" eksisteerivad', () => {
    cy.contains('Eraisik').should('be.visible')
    cy.contains('Ettevõtja').should('be.visible')  
  })
})

describe('2. Otsingu testid', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Otsib "Eesti hümn" ja leiab tulemused', () => {
    cy.get('input[type="text"]').should('be.visible').type('Eesti hümn{enter}')
    cy.contains('Eesti Vabariigi hümn', { timeout: 10000 }).should('exist')  
  })

  it('Tühi otsing kuvab veateate', () => {
    cy.get('input[type="text"]').should('be.visible').clear().type('{enter}')  
    cy.contains('Palun sisesta otsingusõna', { timeout: 5000 }).should('exist')  
  })
})

describe('3. Teenuste navigeerimine', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('"Tervis ja retseptid" avamine "Eraisiku" alt', () => {
    cy.contains('Eraisik').click()
    cy.contains('Tervis ja retseptid').scrollIntoView().click({ force: true })  
    cy.contains('Retseptid', { timeout: 10000 }).should('exist')  
  })

  it('"Retseptid" leht laeb korrektselt', () => {
    cy.contains('Eraisik').click()
    cy.contains('Tervis ja retseptid').click({ force: true })
    cy.contains('Retseptid').click({ force: true })
    cy.url().should('include', 'retseptid')  
    cy.contains('Retsepti info', { timeout: 10000 }).should('exist')  
  })

  it('Terviseportaal avaneb uues aknas', () => {
    cy.contains('Terviseportaal').should('have.attr', 'target', '_blank')  
  })
})

describe('4. Kontaktilehe testid', () => {
  beforeEach(() => {
    cy.visit('https://www.eesti.ee/eraisik/et/vajad-abi')  
  })

  it('"Võtke meiega ühendust" nupp töötab ja viib abilehele', () => {
    cy.contains('Võtke meiega ühendust').scrollIntoView().click({ force: true })  
    cy.url().should('include', 'kontakt')  
    cy.contains('Abi ja kontakt', { timeout: 10000 }).should('exist')  
  })

  it('Kontaktivorm sisaldab olulisi välju', () => {
    cy.get('input[name="name"]', { timeout: 10000 }).should('exist')  
    cy.get('input[name="email"]').should('exist')  
    cy.get('select[name="role"]').should('exist')  
    cy.get('select[name="service"]').should('exist')  
    cy.get('select[name="obstacle"]').should('exist')  
    cy.get('textarea[name="description"]').should('exist')  
  })

  it('Vigane e-post annab veateate', () => {
    cy.get('input[name="email"]').type('viganeemail')  
    cy.get('form').submit()  
    cy.contains('Palun sisesta korrektne e-posti aadress', { timeout: 5000 }).should('exist')  
  })
})
