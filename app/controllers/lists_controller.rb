class ListsController < ApplicationController
  before_action :set_list, only: [:destroy]

  def new
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to list_path(@list)
    else
      render :new
    end
  end

  def index
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
    @bookmark = Bookmark.new
    @review = Review.new(list: @list)
  end

  def destroy
    @list.destroy
    redirect_to list_path(@list)
  end

  private

  def set_list
    @list = list.find(params[:id])
  end

  def list_params
    params.require(:list).permit(:name, :review)
  end
end
