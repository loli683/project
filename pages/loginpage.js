class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.username="//input[@placeholder='Enter Email']"
        this.password="//input[@placeholder='Enter Password']"
        this.loginbutton="//button[text()='Sign in']"
    }
    async loginToApplication()
    {
      await this.page.fill(this.username,"teju@gmail.com")
      await this.page.fill(this.password,"12345678")
      await this.page.click(this.loginbutton)
      await this.page.pause()
   
    
}
}
module.exports=LoginPage;
