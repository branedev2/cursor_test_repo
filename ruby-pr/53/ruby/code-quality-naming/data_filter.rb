class DataFilter
  # {fact rule=code-quality-naming@v1.0 defects=1}
  def m1(l, r1, r2)
    r1[0] = 0
    r2[0] = 0.0
    
    l.each do |x|
      r1[0] += x
    end
    
    r2[0] = l.length > 0 ? r1[0] / l.length : 0
  end

  def m2(v1, v2)
    "T: #{v1}, A: #{'%.2f' % v2}"
  end
  # {/fact}
end