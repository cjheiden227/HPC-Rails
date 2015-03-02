class ReferralMailer < ApplicationMailer
 default from: "Lalaine Minas <referrals@hamlinpsychecenter.com>"

 def send_mail(message)
 	@message=message
 	mail(:to=>'referrals@hamlinpsychecenter.com', :subject=>'Referral from website')
 end

  def message_confirmation(message)
  	@message=message
  	mail(:to=>@message.email, :subject=>"Re: Your message to the Hamlin Psyche Center")
  	
  end
end
