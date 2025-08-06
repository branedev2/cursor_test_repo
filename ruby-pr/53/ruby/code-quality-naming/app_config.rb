class AppConfig
  # {fact rule=code-quality-naming@v1.0 defects=1}
  def initialize
    @cfg = nil
  end

  def init
    @cfg = {}
  end

  def set(k, v)
    init if @cfg.nil?
    @cfg[k] = v
  end

  def get(k)
    @cfg[k] || ''
  end

  def chk(k)
    @cfg.key?(k)
  end
  # {/fact}
end