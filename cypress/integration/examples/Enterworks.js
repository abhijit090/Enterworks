/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe'
describe('testsuite2', ()=>
{
    const getIframeDocument = (frame1) => {
        return cy
        .get(frame1)
        .its('0.contentDocument').should('exist')
      }
      const getIframeBody = (frame1) => {
        return getIframeDocument(frame1)
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
      }



    it('testscript1', ()=>
    {
        cy.visit("http://s1devpimweb1:8090/webcm")
        
        cy.get("[id='username']").type("sbavisa")
        cy.get("[id='password']").type("sbavisa")
        cy.get("[id='login']").click()
        cy.get("[class='wijmo-wijsplitter-v-expander ui-state-default ui-corner-tr ui-corner-br wijmo-wijsplitter-v-panel1-collapsed']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(11) > a:nth-child(2)").click()
        cy.get("#Hierarchy").click()
        cy.wait(2000)
        getIframeBody("div[id='tabHierarchy'] iframe").contains("Action").click()
        getIframeBody("div[id='tabHierarchy'] iframe").contains("New").click()
       // getI2frameBody().contains("#codeSetName").type("Abc123")
        //getIframeBody("[id='codeset-editor'] iframe").frameLoaded("").contains("[name='codeSetName']").type("Abc123")
        //input name field
        const randomnumber2 = Math.floor(Math.random()*(9))
        globalThis.randomnumber2 = randomnumber2
        let random_string = Math.random().toString(36).substring(2,3)
        globalThis.random_string = random_string
        cy.wait(3000)
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[id='codeSetName']", "testname1"+random_string, "type")
        //input description field
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "#codeSetDescription", "Prefix1", "type")
        //description in other language
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "#multiLangInd", "", "click")
    //    include owner
       cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "#ownerUseInd0", "", "click")
       //click path code
       cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "#pathCode0", "", "click")
        //Select source 
        cy.wait(1000)
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "#codeSetSource0", "", "click")
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "#nextBtn", "", "click")
        cy.wait(1000)
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[value='Add']", "", "click")
        cy.wait(1000)
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[type='text'][size='30']", "testAdd1", "type")
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[value='Next']", "", "click")
        cy.wait(2000)
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[value='Add']", "", "click")
    
        
    })
})