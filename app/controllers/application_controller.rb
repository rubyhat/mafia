class ApplicationController < ActionController::Base

  EVENT_PER_PAGE = 10

  def event_pagination(model)
    # offset задает страницу, limit задает количество айтемов на странице
    # если всего айтемов 9, а limit(3), то offset(0/1/2) будет максимум 3 страницы
    # так как 3 3 3
    @page = params.fetch(:page, 0).to_i
    model.offset(@page * EVENT_PER_PAGE).limit(EVENT_PER_PAGE)
  end

  def not_found
    raise ActionController::RoutingError.new('Not Found')
  rescue
    render_404
  end
  
  def render_404
    respond_to do |format|
      format.html do
        render file: "#{Rails.root}/public/404",
               status: :not_found
      end
      format.xml  { head :not_found }
      format.any  { head :not_found }
    end
  end
end
