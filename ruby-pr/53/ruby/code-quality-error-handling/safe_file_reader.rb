class SafeFileReader
  def read_file(filename)
    # {fact rule=code-quality-error-handling@v1.0 defects=0}
    raise ArgumentError, "Filename cannot be nil" if filename.nil?
    raise ArgumentError, "File does not exist: #{filename}" unless File.exist?(filename)
    raise ArgumentError, "File is not readable: #{filename}" unless File.readable?(filename)

    begin
      File.read(filename)
    rescue Errno::ENOENT => e
      raise RuntimeError, "File not found: #{filename}"
    rescue Errno::EACCES => e
      raise RuntimeError, "Permission denied: #{filename}"
    rescue IOError => e
      raise RuntimeError, "IO error reading file: #{e.message}"
    end
    # {/fact}
  end
end