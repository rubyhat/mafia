# frozen_string_literal: true
class UsersController < ApplicationController
  def show
    @user = User.find(params[:id]) rescue not_found
  end

  # После неудачной регистрации открывается страница /users, если ее обновить,
  # то выйдет ошибка, поэтому с нее редиректит обратно на форму регистрации
  def users_sign_up
    redirect_to new_user_registration_url
  end
end