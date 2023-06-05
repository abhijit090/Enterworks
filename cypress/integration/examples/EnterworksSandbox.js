/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe';

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
      //const newurl = "http://67.22.105.214:8090/webcm/CodeDetail.do?epimAction=Start"
        //visit url
        cy.visit("http://67.22.105.214:8090/webcm")
        //enter username and password
        cy.get("[id='username']").type("Ajadhav")
        cy.get("[id='password']").type("Ajadhav")
        //click login button
        cy.get("[id='login']").click()
        //expand button click
        cy.get("[class='wijmo-wijsplitter-v-expander ui-state-default ui-corner-tr ui-corner-br wijmo-wijsplitter-v-panel1-collapsed']").click()
        //Model button click
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(9) > a:nth-child(2)").click()
        //click sequence
        cy.get("#Hierarchy").click()
        cy.wait(2000)
        //click Actions and then click new button
        getIframeBody("div[id='tabHierarchy'] iframe").contains("Action").click()
        getIframeBody("div[id='tabHierarchy'] iframe").contains("New").click()
       cy.wait(3000)
       //input name field
       const randomnumber2 = Math.floor(Math.random()*(9))
       globalThis.randomnumber2 = randomnumber2
       let random_string = Math.random().toString(36).substring(2,3)
       globalThis.random_string = random_string
       cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[id='name']", "testname1"+random_string, "type")
        //input description field
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[id='description']", "Prefix1", "type")
        //select include owner
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[id='ownerUseInd0']", "", "click")
    //    select pathcode
       cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[id='pathCode0']", "", "click")
       //click next button
       cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[id='nextBtn']", "", "click")
        //click next 
        cy.wait(1000)
        cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[name='AddButton']", "", "click")
       cy.wait(1000)
       cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[type='text'][size='30']", "testinput", "type")
       cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "[name='Next']", "", "click")
       cy.wait(3000)
    
     //  cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "input[type='button'][value='Add']", "", "click")
   
    //  cy.window().then(win=>{
    //   popupWindow.location.href = newurl
    //   cy.get("input[name='code']").type("fesgfr",{force:true})
    //   cy.get('#description').type("dsacf",{force:true})
      
    //   })
    //cy.get("input[type='button'][value='Add']").click()
    //window.location.href = Cypress.config().baseUrl + '/CodeDetail.do?epimAction=Start';//
//it.only('Window pop up', ()=> {
  const popurl= "http://67.22.105.214:8090/webcm/CodeDetail.do?epimAction=Start";
    cy.window().then(win => {
      cy.stub(win, 'open').as('WO')
      // .callsFake(url => {
      //   popurl=url
      // }).args() 
       })
        // change window location to be same as the popup url
      //   window.location.href = Cypress.config().baseUrl + '/CodeDetail.do?epimAction=Start';
      //   console.log("this is popup "+window.location.href )
      // .as("popup") // alias it with popup, so we can wait refer it with @popup
      cy.new_nest_frame("div[id='tabHierarchy'] iframe", "[id='codeset-editor'] iframe", "input[type='button'][value='Add']", "", "click")
      cy.get('@WO').should('be.calledWithExactly', popurl)
   
    cy.window().then(win => {
         win.location.href = pop_url 
         cy.get("input[name='code']").type("fesgfr",{force:true})
         cy.get('#description').type("dsacf",{force:true})
    }) 
      
    // })
      })
    })
      // Click button which triggers javascript's window.open() call

    
    
