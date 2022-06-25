class Api::ImagesController < ApplicationController

  skip_before_action :verify_authenticity_token
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @images = Image.with_attached_image.all
  end

  def show
    @image = Image.with_attached_image.find_by(id: params[:id])
  end

  def create
    @image = Image.new(image_params)
    if current_user
      @image.uploader_id = current_user.id
    else
      return render json: ["An error has occured"], status: 401
    end
    if @image.save
      render :show
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def update
    @image = Image.with_attached_image.find_by(id: params[:id])
    if @image.update(image_params)
      render :show
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def destroy
    @image = Image.find_by(id: params[:id])
    if @image && @image.destroy
      render json: ["Deleted"], status: 200
    else
      render json: ["Not Found"], status: 404
    end
  end

  private

  def image_params
    params.require(:image).permit(:title, :description, :image, :uploader_id)
  end
  
end
