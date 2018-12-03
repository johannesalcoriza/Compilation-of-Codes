describe('My Final Task', () =>{
	
	it('Check username password', () =>{
		cy.visit('https://login.salesforce.com',)
		cy.wait(5000)
		
		cy
		.get('#username')
		.type('John Doe')
		
		
		cy
		.get('#password')
		.type('passpass')
		
		cy
		.get('#rememberUn')
		.check()
		
		
	})
})
