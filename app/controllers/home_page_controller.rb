class HomePageController < ApplicationController
	def new
		
  	end

  	def index
  		@message = Message.new
  	end

  	def send_email_form
  		@message = Message.new(params[:message])
  		if @message.valid?
  			redirect_to root_path
  			flash.notice= "email sent"
  		else
  			flash.now.alert = "Email could not be sent. Please check your entries."
  		end
  		
  	end
end
