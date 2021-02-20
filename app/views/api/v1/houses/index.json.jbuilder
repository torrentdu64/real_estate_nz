json.array! @houses do |house|
  json.extract! house, :id, :name, :price, :address, :image_urls, :latitude, :longitude
end



# @overflow=false,
#  @vars={:page=>1,
#          :items=>6,
#           :outset=>0,
#            :size=>[1, 4, 4, 1],
#             :page_param=>:page,
#              :params=>{},
#               :anchor=>"",
#                :link_extra=>"",
#                 :i18n_key=>"pagy.item_name",
#                  :cycle=>false,
#                   :overflow=>:empty_page,
#                    :steps=>false,
#                     :metadata=>[:scaffold_url, :count, :page, :prev, :next, :last],
#                      :count=>10

#       },
# @count=10,
#  @items=6,
#  @outset=0,
#  @page=1,
#  @last=2,
#  @pages=2, @offset=0, @from=1, @to=6, @prev=nil, @next=2>
