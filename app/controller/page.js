'use strict';

const Controller = require('egg').Controller;

class PageController extends Controller {
  async index() {
    const { ctx } = this;
    const { indexPage } = this.app.config;
    ctx.redirect(indexPage);
  }

  async page() {
    const { ctx } = this;
    const { packagePage } = ctx;
    const { jianghuKnex } = this.app;
    await ctx.render(`page/${packagePage.pageId}.html`, {
      ...ctx.hookResult,
      uiActionList: JSON.stringify(await jianghuKnex('_ui').whereIn('pageId', [ packagePage.pageId, 'allPage' ]).select())
    });
  }


}

module.exports = PageController;
