# frozen_string_literal: true
class EventsController < ApplicationController
  before_action :set_event, only: %i[show update destroy edit]
  before_action :authenticate_user!, except: %i[index show]

  # GET /events
  def index
    @event = Event.new
    @events = event_pagination(Event.all.order('created_at DESC'))
  end

  # POST /events
  def create
    # @event = Event.create(events_params)
    @event = Event.create(events_params)
    @event.user_id = current_user.id
    if @event.save
      respond_to do |format|
        format.html { redirect_to root_path, notice: 'Сбор успешно создан!' }
        format.json { render root_path, status: :created, location: @event }
      end
      # flash[:notice] = 'Success'
      # redirect_to root_path
    else
      respond_to do |format|
        format.html { redirect_to root_path, alert: 'Ошибка создания сбора! Проверьте правильность введенных данных.' }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
      # flash[:alert] = 'Error'
      # redirect_to root_path
    end

    # if @event.persisted?
    #   flash[:success] = 'Событие создано'
    #   redirect_to root_path
    # else
    #   redirect_to index
    #   flash[:error] = 'Ошибка создания события'
    # end
  end

  def new
    # @event = current_user.events.build
    @event = Event.new
  end

  # GET /events/:id
  def show
    @event
    render_404 unless @event
  end

  # GET /events/1/edit
  def edit; end

  # PUT/PATCH /events/1
  def update; end

  # DELETE /events/1
  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'Сбор был успешно удален' }
      format.json { head :no_content }
    end
  end

  private

  def events_params
    params.require(:event).permit(:name, :user_id, :date)
  end

  def set_event
    @event = Event.find(params[:id]) rescue not_found
  end

end
