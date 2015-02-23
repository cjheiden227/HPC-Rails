class ReferralMailer < ApplicationMailer
 default from: "Lalaine Minas <referrals@hamlinpsychecenter.com>"


  def message_confirmation(user)
  	@user=user
  	mail(:to=>@user.email, :subject=>"Re: #{@user.messages.last.subject}")
  	
  end
end
