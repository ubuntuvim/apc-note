import Ember from 'ember';

export default Ember.Component.extend({
 
	didInsertElement() {

		// 笔记本展开、折叠状态设置
		Ember.$('.tree-toggler').click(function () {
			// 设置左侧的图标
			var firstChild = Ember.$(this).children(".glyphicon");
			var subTree = Ember.$(this).parent().children('ul.tree');
			// if (firstChild.hasClass("glyphicon-plus")) {
			
			if (subTree.is(":hidden")) {   //折叠状态
				// firstChild.removeClass("rotation90");
				//设置左侧图标为展开状态
				firstChild.addClass("rotation90");
				// 展开笔记列表
				Ember.$(this).parent().children('ul.tree').slideDown();
			} else {  //展开状态
				firstChild.removeClass("rotation90");
				// firstChild.addClass("rotation90");

				// 折叠笔记列表
				Ember.$(this).parent().children('ul.tree').slideUp();
			}
		});
	}
});
