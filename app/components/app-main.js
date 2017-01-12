import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
		
		// 折叠、展开左侧菜单按钮
		Ember.$(".ape-note-well .tree-menu .close-menu-panel .glyphicon").click(function() {
			var wid;
			var glthis = Ember.$(this);
			var isClose = (wid = Ember.$("#wrapper")).hasClass("toggled");
			if (!isClose) {  //关闭状态
				// 按钮也移动到最左侧，并且调换方向
				// Ember.$(this).parent().css("left", "0");
				glthis.parent().animate({left: "0px"}, function() {
					// 替换另外一个反方向图片
					glthis.addClass("glyphicon-chevron-right");
				});
			} else {
				glthis.parent().animate({left: "250px"}, function() {
					// 替换另外一个反方向图片
					glthis.removeClass("glyphicon-chevron-right");
				});
			}
			wid.toggleClass("toggled");
		});
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
