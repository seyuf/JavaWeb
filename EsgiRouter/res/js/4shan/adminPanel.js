
$(function(){
	Esgi.module = Esgi.module || {}
	Esgi.module.user = Esgi.module.user || {}

	Esgi.module.user.adminPanel = function (cfg) {
		if(cfg.error){
			return;
		}
		cfg.id = "#MainPanel";

		
		new  shan.html.panel({
			url : APP_CONTEXT+'/user/connect',
			renderTo : cfg.id,
			inputs : [
			          {
			        	  type : "AdminCommentPanel",
			        	  comment : cfg.comments[0].comment,
			        	  imgPath: '/EsgiRouter/res/img/'+cfg.comments[0].filePath,
			        	  result:cfg
			          }

			          ]
		});
		for(var i = 1; i<cfg.comments.length; i++){
			var comment  = {
					commentContent: cfg.comments[i].comment,
					filePath:cfg.comments[i].filePath,
					id: "#subject"+cfg.subjectId,
					subjectId: cfg.subjectId,
					userName: cfg.userName
			}
			new Esgi.module.user.AdminCommentPanel(comment, comment.subjectId);
		}

	}

});

