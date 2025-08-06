  params = ActionController::Parameters.new({
  person: {
    name: "Francesco",
    age:  22,
    role: "admin"
  }
})
# {fact rule=mass-assignment@v1.0 defects=1}

#ruleid: check-permit-attributes-high
params.permit(:admin)# {/fact}
# {fact rule=mass-assignment@v1.0 defects=0}
#ok: check-permit-attributes-high
params.permit(:some_safe_property)# {/fact}
