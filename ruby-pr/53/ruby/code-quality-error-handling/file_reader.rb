class FileReader
  def read_file(filename)
    # {fact rule=code-quality-error-handling@v1.0 defects=1}
    begin
      content = File.read(filename)
      return content
    rescue => e
      return false # Hiding exception details
    end
    # {/fact}
  end
end