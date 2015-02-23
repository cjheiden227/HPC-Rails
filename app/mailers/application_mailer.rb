class ApplicationMailer < ActionMailer::Base
  default from: "referrals@hamlinpsychecenter.com"
  layout 'mailer'

  def message_confirmation(user)
  	mail(:to=>user.email, :subject=>'Your message to the Hamlin Psyche Center')
  	
  end
end
