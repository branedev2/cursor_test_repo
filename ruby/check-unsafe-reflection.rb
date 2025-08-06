class HomeController < ApplicationController

  def unsafe_reflection # not that safe
# {fact rule=autoescape-disabled@v1.0 defects=1}
    table = params["table"]
    # ruleid: check-unsafe-reflection
    model = table.classify.constantize
# {/fact}
    @result = model.send(:method)
  end

  # safe
  def ok_reflection
# {fact rule=autoescape-disabled@v1.0 defects=0}
    foo = "SomeClass"
    #ok: check-unsafe-reflection
    foo.classify.constantize
# {/fact}
  end

  def test_more_send_methods
    User.try(params[:meth])
    self.__send__(params[:meth])
    Account.public_send(params[:meth])

# {fact rule=autoescape-disabled@v1.0 defects=1}
    table = params["table"]
    # ruleid: check-unsafe-reflection
    table.classify.constantize.try(:meth)
# {/fact}
  end

end