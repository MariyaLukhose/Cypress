describe('SignIn Page',function()
{
    it('Going to Sign In page and verifying Title',function(){    
        cy.visit('https://petstore.octoperf.com/');
        cy.get('a').click();
        cy.contains('Sign In').click();
        cy.title().then(txt=>{
            expect(txt).to.eql('JPetStore Demo');
            cy.log(txt);
        });
    });
    
    it('Validate signin Page with not registered details',function(){      
        cy.get('input[name="username"]').type('Mariya');
        cy.get('input[name="password"]').type('Mariy');
        cy.contains('Login').click();
        cy.get('li').should('have.text', 'Invalid username or password.  Signon failed.');
    });
   

    it('Validate signin Page with already registered details',function(){      
        cy.get('input[name="username"]').type('Mariya');
        cy.get('input[name="password"]').clear().type('Mariya');
        cy.contains('Login').click();
        cy.get('#WelcomeContent').then(function(txt){
          expect(txt.text()).to.eql('\n\t\n        Welcome Mariya!\n      \n');
        cy.get('#SidebarContent>a').eq(0).click();
        })
    });
});