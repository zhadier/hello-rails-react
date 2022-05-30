class V1::MessagesController < ApplicationController
  def index
    @message = Message.find(Message.pluck(:id).sample)
    render json: {
      message: @message
    }
  end
end
