# frozen_string_literal: true
class UsersController < ApplicationController
  def show
    event_pagination(current_user.events.all.order('created_at DESC'))
    @user = User.find(params[:id]) rescue not_found
  end

  # После неудачной регистрации открывается страница /users, если ее обновить,
  # то выйдет ошибка, поэтому с нее редиректит обратно на форму регистрации
  def users_sign_up
    redirect_to new_user_registration_url
  end
end