# # Semgrep dataset has recently changed the test case here.
# # So corrected the dataset accordingly.
#
# #{ex-fact rule=untrusted-deserialization@v1.0 defects=1}
#
# import yaml
#
#
# #ruleid:avoid-pyyaml-load
# yaml.unsafe_load("!!python/object/new:os.system [echo EXPLOIT!]")
#
# #{/ex-fact}
