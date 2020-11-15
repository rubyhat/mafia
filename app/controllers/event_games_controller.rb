class EventGamesController < ApplicationController
  def create
    @event_game = current_user.event_games.build(event_games_params)
    if @event_game.save
      respond_to do |format|
        format.html { redirect_to root_path, notice: 'Event game success' }
        format.json { render root_path, status: :created, location: @event_game }
      end
      # flash[:notice] = 'Success'
      # redirect_to root_path
    else
      respond_to do |format|
        format.html { redirect_to root_path, alert: @event_game.errors.full_messages }
        format.json { render json: @event_game.errors, status: :unprocessable_entity }
      end
      # flash[:alert] = 'Error'
      # redirect_to root_path
    end
  end

  def new
    @event_game = current_user.event_games.build
  end

  private

  def event_games_params
    params.permit(:user_id, :event_id)
  end

  def set_event_game
    @event = EventGame.find(params[:id])
  end
end
