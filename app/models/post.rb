class Post < ApplicationRecord
  def set_factorial
    num = rand(1..10)
    calculated_factorial = (1..num).reduce(:*) || 1

    self.factorial = calculated_factorial
    save
  end
end
