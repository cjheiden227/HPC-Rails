class Message 
	include ActiveAttr::Model
	include ActiveModel::Validations
	# Define attributes
    attribute :name
    attribute :email
    attribute :phone
    attribute :body

    # Mass assignment security
    # Whitelist attributes that you want to mass assign user given data to
    # attr_accessible :name, :email, :phone, :body	

    validates_presence_of :name
    validates_presence_of :email
    validates :email, email_format: { message: "is not looking like a valid email address"}

    validates_presence_of :phone

    validates_length_of :body, maximum: 500
end
