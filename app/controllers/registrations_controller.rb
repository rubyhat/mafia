class RegistrationsController < Devise::RegistrationsController

  private

  protected def after_update_path_for(resource)
    edit_user_registration_path
  end

  def sign_up_params
    params.require(:user).permit(:name, :username, :email, :password,
                                 :password_confirmations)
  end

  def account_update_params
    params.require(:user).permit(:name, :username, :email, :password,
                                 :password_confirmations, :current_password)
  end

  # Redirect after sign up to root page
  def after_sign_up_path_for(resource)
    '/'
  end

end