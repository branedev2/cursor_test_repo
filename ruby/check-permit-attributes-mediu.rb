  params = ActionController::Parameters.new({
  person: {
    name: "Francesco",
    age:  22,
    role_id: "admin"
  }
})
# {fact rule=mass-assignment@v1.0 defects=1}

# ruleid: check-permit-attributes-medium
params.permit(:role_id)# {/fact}
# {fact rule=mass-assignment@v1.0 defects=0}
#ok: check-permit-attributes-medium
params.permit(:some_safe_property)# {/fact}
