class HomePageController < ApplicationController


  	def index
  		@message = Message.new
  	end

  	def send_email_form
  		@message = Message.new(params[:message])

  		if @message.valid?
        ReferralMailer.message_confirmation(@message).deliver
        ReferralMailer.send_mail(@message).deliver
        respond_to do |format|
            format.html{redirect_to root_path}
            format.js
        end
  		
  		else
          respond_to do |format|
            format.html{redirect_to root_path}
            format.js
        end
    	end
  	end
end
