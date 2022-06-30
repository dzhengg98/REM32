class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    render :show
  end

  def index
    @comments = Comment.all
    render :index
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :image_id, :user_id, :parent_id, :body)
  end
end
