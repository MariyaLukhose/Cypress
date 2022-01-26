describe('Launching app',function()
{
    it('Launch Browser and validate title',function(){    
        cy.visit('https://petstore.octoperf.com/');
        // VERIFY TITLE
        // cy.document().should(doc=>{
        //     const title=doc.title;
        // expect(title).to.eql('JPetStore Demo');
        // });

        cy.title().then(txt=>{
            expect(txt).to.eql('JPetStore Demo');
        });
    });

    it('Validate heading and footer of the launch page',function(){      
        cy.get('h2').then(function(txt){
            expect(txt.text()).to.eql("Welcome to JPetStore 6");
        });
        cy.get('sub').then(function(txt1){
            expect(txt1.text()).to.eql("Copyright www.mybatis.org ");
        });
    });

    it.skip('Validate header of the launch page',function(){      
        cy.get('#Content > :nth-child(3)');//This function is skipped
    });
});