var app = app || {};
app.amway = app.amway || {};
app.amway.mmb = app.amway.mmb || {};
app.amway.mmb.list = app.amway.mmb.list || {};
(function () {
    app.amway.mmb.list.SERVICE_URL = "";
    app.amway.mmb.list.SERVICE_URL_CAMPAIGN = "";
    app.amway.mmb.list.calendar_url = "";
    app.amway.mmb.list.calendar_dvd = "";
    app.amway.mmb.list.calendar_pd = "";
    app.amway.mmb.list.calendar_class = "";
    app.amway.mmb.list.calendar_pagesize = "";
    app.amway.mmb.list.calendar_category = "";
    var c = new Date();
    var e = parseInt(c.getFullYear()) + parseInt(1);
    var f = e + "0831";
    app.amway.mmb.list.model = Backbone.Model.extend({});
    app.amway.mmb.list.collection = Backbone.Collection.extend({model: app.amway.mmb.list.model});
    app.amway.mmb.list.localcollection = Backbone.Collection.extend({model: app.amway.mmb.list.model, localStorage: new Backbone.LocalStorage("B13CommunicationMessageService.getMessage"), clear: function () {
            this.localStorage._clear()
        }, reset: function (h, g) {
            console.log(h.length)
        }});
    app.amway.mmb.list.pageablecollection = Backbone.PageableCollection.extend({model: app.amway.mmb.list.model, state: {isClientMode: true, firstPage: 0, currentPage: 0, pageSize: 5, filterKey: "", filterValue: "", dvd: ""}});
    var b = ("ontouchstart" in window);
    var a = 0;
    var d = "middle";
    app.amway.mmb.list.view = Backbone.View.extend({render: function () {
            var i = $("#list_template").html();
            var h = Handlebars.compile(i);
            var g;
            if (this.collection.models.length === 0) {
                var j = new app.amway.mmb.list.model();
                j.set({isNothing: true});
                g = h(j.toJSON())
            } else {
                if (this.collection.state.dvd !== "001") {
                    g = h(this.collection.toJSON())
                } else {
                    g = h(jQuery.parseJSON(JSON.stringify(this.collection.toJSON())))
                }
            }
            this.$el.html(g);
            $(".m-news-text").bind("click", function (p) {
                var k = this.parentNode.parentNode;
                var l = k.getAttribute("campaignStatus");
                var m = k.getAttribute("mid");
                var o = app.amway.mmb.utils.getDistId();
                var q = k.getAttribute("rdst");
                var n = k.getAttribute("hticdfg");
                if (q !== "1" && n !== "1") {
                    app.amway.mmb.list.setReadStatus(o, "1", m)
                }
                if (l === "1") {
                    app.amway.mmb.list.setCampaign(o, m, l)
                }
            });
            $(".m-ranking-text").bind("click", function (o) {
                var k = this.parentNode.parentNode.firstElementChild;
                var p = k.getAttribute("rdst");
                var m = k.getAttribute("hticdfg");
                var l = k.getAttribute("mid");
                var n = app.amway.mmb.utils.getDistId();
                if (p !== "1" && m !== "1") {
                    app.amway.mmb.list.setReadStatus(n, "1", l)
                }
            })
        }, initialize: function () {
            this.collection.on("reset", this.render, this);
            this.title;
            this.titleText;
            $("#focusDiv").bind("touchstart mousedown", this.start);
            $("#focusDiv").bind("touchmove mousemove", this.move);
            $("#focusDiv").bind("touchend mouseup", this.end)
        }, start: function (g) {
            this.pageX = (b ? event.changedTouches[0].pageX : g.pageX);
            this.pageY = (b ? event.changedTouches[0].pageY : g.pageY);
            this.left = $(this).position().left;
            this.top = $(this).position().top;
            this.touched = true;
            a = this.pageY
        }, move: function (h) {
            if (!this.touched) {
                return
            }
            this.left = this.left - (this.pageX - (b ? event.changedTouches[0].pageX : h.pageX));
            this.top = this.top - (this.pageY - (b ? event.changedTouches[0].pageY : h.pageY));
            $(this).css({left: this.left, top: this.top});
            this.pageX = (b ? event.changedTouches[0].pageX : h.pageX);
            this.pageY = (b ? event.changedTouches[0].pageY : h.pageY);
            var g = this.pageY - a;
            if ((d === "bottom" && g > 0) || (d === "head" && g < 0)) {
                d = "middle"
            }
            if (d !== "middle") {
                if (d === "bottom" && ($(window).scrollTop() + $(window).height() < $(document).height())) {
                    d = "middle"
                } else {
                    h.preventDefault()
                }
            }
        }, end: function (k) {
            if (!this.touched) {
                return
            }
            this.touched = false;
            this.pageY = (b ? event.changedTouches[0].pageY : k.pageY);
            if (d !== "middle" && document.readyState === "complete") {
                if ($(window).scrollTop() + $(window).height() >= $(document).height() && this.pageY - a < 0) {
                    if (app.amway.mmb.list.dispCollection.state.currentPage < app.amway.mmb.list.dispCollection.state.totalPages - 1) {
                        $("#loading").fadeIn();
                        app.amway.mmb.list.dispCollection.getNextPage();
                        if (app.amway.mmb.list.calendar_dvd === "002") {
                            window.scrollTo(1, $("#focusDiv")[0].offsetTop - $("#focusH2")[0].clientHeight)
                        } else {
                            window.scrollTo(1, 1)
                        }
                        $("#loading").fadeOut()
                    } else {
                        if (app.amway.mmb.list.calendar_dvd === "001" && app.amway.mmb.list.dispCollection.state.currentPage >= app.amway.mmb.list.dispCollection.state.totalPages - 1) {
                            var h = parseInt(app.amway.mmb.list.dispCollection.models.length) - parseInt(1);
                            var j = app.amway.mmb.list.dispCollection.models[h].attributes.cldt;
                            j = j.substr(0, 4) + "/" + j.substr(4, 2) + "/" + j.substr(6, 2);
                            var g = new Date(j);
                            j = g.Format("yyyyMMdd");
                            g.setDate(g.getDate() + 1);
                            var m = g.Format("yyyyMMdd");
                            g.setMonth(g.getMonth() + 2);
                            var i = g.Format("yyyyMMdd");
                            i = (f > i ? i : f);
                            if (j < f) {
                                $("#loading").fadeIn();
                                app.amway.mmb.list.init(app.amway.mmb.list.calendar_url, app.amway.mmb.list.calendar_dvd, m, "", app.amway.mmb.list.calendar_pd, app.amway.mmb.list.calendar_class, app.amway.mmb.list.calendar_pagesize, app.amway.mmb.list.calendar_category, app.amway.mmb.list.SERVICE_URL, app.amway.mmb.list.SERVICE_URL_CAMPAIGN);
                                window.scrollTo(1, 1);
                                $("#loading").fadeOut()
                            }
                        }
                    }
                    d = "middle"
                } else {
                    if ($(window).scrollTop() <= 0 && this.pageY - a > 0) {
                        if (app.amway.mmb.list.dispCollection.state.currentPage > 0) {
                            $("#loading").fadeIn();
                            app.amway.mmb.list.dispCollection.getPreviousPage();
                            $("#loading").fadeOut()
                        } else {
                            if (app.amway.mmb.list.calendar_dvd === "001" && app.amway.mmb.list.dispCollection.state.currentPage === 0 && app.amway.mmb.list.dispCollection.models[0].attributes.cldt > c.Format("yyyyMMdd")) {
                                var l = app.amway.mmb.list.dispCollection.models[0].attributes.cldt;
                                if (l > c.Format("yyyyMMdd")) {
                                    $("#loading").fadeIn();
                                    app.amway.mmb.list.init(app.amway.mmb.list.calendar_url, app.amway.mmb.list.calendar_dvd, "", "", app.amway.mmb.list.calendar_pd, app.amway.mmb.list.calendar_class, app.amway.mmb.list.calendar_pagesize, app.amway.mmb.list.calendar_category, app.amway.mmb.list.SERVICE_URL, app.amway.mmb.list.SERVICE_URL_CAMPAIGN);
                                    $("#loading").fadeOut()
                                }
                            }
                        }
                        d = "middle"
                    }
                }
            }
        }});
    $(window).scroll(function () {
        if ($(document).height() > $(window).height()) {
            if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
                d = "bottom"
            } else {
                if ($(window).scrollTop() <= 0) {
                    d = "head"
                } else {
                    d = "middle"
                }
            }
        } else {
            d = "true"
        }
    });
    app.amway.mmb.list.filter = function (h, i) {
        var g = app.amway.mmb.list.baseCollection.filter(function (j) {
            return j.get(key) === value
        });
        return g
    };
    app.amway.mmb.list.groupData = function (q, w) {
        var r = new Array();
        var s = _.groupByMulti(q.toJSON(), w);
        for (var v in s) {
            var h = new app.amway.mmb.list.model();
            h.set({cldt: v});
            for (var t in s[v]) {
                h.set({cldtbdd: t});
                for (var i in s[v][t]) {
                    h.set({cldtwdd: i});
                    var g = new Array();
                    $.each(s[v][t][i], function (j, k) {
                        if (k.mid === "") {
                            g.push(j)
                        }
                    });
                    for (var p = 0;
                            p < g.length;
                            p++) {
                        var n = g[p];
                        s[v][t][i].splice(n, 1);
                        for (var m = p + 1;
                                m < g.length;
                                m++) {
                            g[m] -= -1
                        }
                    }
                    var o = new app.amway.mmb.list.collection();
                    o.add(s[v][t][i]);
                    var l = o.filter(function (j) {
                        return j.get("mctdv") !== "000003"
                    });
                    var u = o.filter(function (j) {
                        return j.get("mctdv") === "000003"
                    });
                    h.set({nonPlazaList: l});
                    h.set({plazaList: u});
                    if (l.length === 0 && u.length === 0) {
                        h.set({isNothing: true})
                    }
                }
            }
            r.push(h)
        }
        q.comparator = function (k, j) {
            if (k.get("cldt") < j.get("cldt")) {
                return -1
            }
            if (j.get("cldt") > k.get("cldt")) {
                return 1
            }
            return 0
        };
        return r
    };
    _.groupByMulti = function (j, g, h) {
        if (!g.length) {
            return j
        }
        var k = _.groupBy(j, g[0], h), i = g.slice(1);
        for (var l in k) {
            k[l] = _.groupByMulti(k[l], i, h)
        }
        return k
    };
    app.amway.mmb.list.init = function (i, m, k, l, p, h, q, j, o, n) {
        var g = new app.amway.mmb.list.model();
        g.set("dvd", m);
        g.set("inum", app.amway.mmb.utils.getDistId());
        g.set("fd", k);
        g.set("td", l);
        app.amway.mmb.list.configModel = new app.amway.mmb.list.model();
        app.amway.mmb.list.configModel.set("pageSize", parseInt(q));
        app.amway.mmb.list.configModel.set("parentClass", h);
        app.amway.mmb.list.baseCollection = new app.amway.mmb.list.localcollection();
        app.amway.mmb.list.dispCollection = new app.amway.mmb.list.pageablecollection();
        if (p === "osusowake") {
            app.amway.mmb.list.configModel.set("filterKey", "sctdv");
            app.amway.mmb.list.configModel.set("filterValue", "000001")
        } else {
            if (p === "global") {
                app.amway.mmb.list.configModel.set("filterKey", "sctdv");
                app.amway.mmb.list.configModel.set("filterValue", "000002")
            } else {
                if (p === "news") {
                    app.amway.mmb.list.configModel.set("filterKey", "mctdv");
                    app.amway.mmb.list.configModel.set("filterValue", j)
                } else {
                    app.amway.mmb.list.configModel.set("filterKey", "");
                    app.amway.mmb.list.configModel.set("filterValue", "")
                }
            }
        }
        app.amway.mmb.list.configModel.set("dvd", m);
        app.amway.mmb.list.SERVICE_URL = o;
        app.amway.mmb.list.SERVICE_URL_CAMPAIGN = n;
        app.amway.mmb.list.calendar_url = i;
        app.amway.mmb.list.calendar_dvd = m;
        app.amway.mmb.list.calendar_pd = p;
        app.amway.mmb.list.calendar_class = h;
        app.amway.mmb.list.calendar_pagesize = q;
        app.amway.mmb.list.calendar_category = j;
        $.ajax({url: i, type: "POST", async: false, data: JSON.stringify(g.toJSON()), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (t, r, s) {
                if (t.rc === "JMB0001" && t.mvs && t.mvs.length > 0) {
                    app.amway.mmb.list.baseCollection.clear();
                    $.each(t.mvs, function (u, v) {
                        v.inde = u + 1;
                        app.amway.mmb.list.baseCollection.create(v)
                    });
                    if (app.amway.mmb.list.configModel.get("filterKey") !== "" && app.amway.mmb.list.configModel.get("filterValue") !== "") {
                        app.amway.mmb.list.refreshListView(app.amway.mmb.list.filterData(p, app.amway.mmb.list.configModel.get("filterKey"), app.amway.mmb.list.configModel.get("filterValue")))
                    } else {
                        if (app.amway.mmb.list.configModel.get("dvd") === "001") {
                            app.amway.mmb.list.refreshListView(app.amway.mmb.list.groupData(app.amway.mmb.list.baseCollection, ["cldt", "cldtbdd", "cldtwdd"]))
                        } else {
                            app.amway.mmb.list.refreshListView(app.amway.mmb.list.baseCollection.models)
                        }
                    }
                } else {
                    app.amway.mmb.list.baseCollection.reset(new Array());
                    app.amway.mmb.list.refreshListView(app.amway.mmb.list.baseCollection.models)
                }
            }, error: function (t, r, s) {
                app.amway.mmb.list.baseCollection.reset(new Array());
                app.amway.mmb.list.refreshListView(app.amway.mmb.list.baseCollection.models)
            }})
    };
    app.amway.mmb.list.refreshListView = function (k) {
        var j = new app.amway.mmb.list.model();
        var h = new app.amway.mmb.list.model();
        h = app.amway.mmb.list.configModel.clone();
        var i = k.slice(0);
        if (app.amway.mmb.list.configModel.get("pageSize") > k.length) {
            h.set("pageSize", k.length)
        }
        j.set("state", h.toJSON());
        app.amway.mmb.list.dispCollection = new app.amway.mmb.list.pageablecollection(i, j.toJSON());
        var g = new app.amway.mmb.list.view({el: $("." + app.amway.mmb.list.configModel.get("parentClass")), collection: app.amway.mmb.list.dispCollection});
        g.render()
    };
    app.amway.mmb.list.setReadStatus = function (k, h, m) {
        var g = new app.amway.mmb.utils.CommunicationMessageModel();
        g.set("inum", k);
        g.set("mtp", h);
        var j = new Array();
        j[0] = m;
        g.set("msgs", j);
        $.ajax({url: app.amway.mmb.list.SERVICE_URL, type: "POST", data: JSON.stringify(g), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (p, n, o) {
                console.log("updated read status successfully.")
            }, error: function (p, n, o) {
                console.log("updated read status failure." + o)
            }});
        var i = new Date();
        var l = i.getTime() + 500;
        while (true) {
            i = new Date();
            if (i.getTime() > l) {
                break
            }
        }
    };
    app.amway.mmb.list.setCampaign = function (j, i, h) {
        var g = new app.amway.mmb.utils.CommunicationMessageModel();
        g.set("inum", j);
        g.set("mid", i);
        g.set("cpid", h);
        $.ajax({url: app.amway.mmb.list.SERVICE_URL_CAMPAIGN, type: "POST", async: false, data: JSON.stringify(g), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (m, k, l) {
                console.log("updated campaign successfully.")
            }, error: function (m, k, l) {
                console.log("updated campaign failure." + l)
            }})
    };
    app.amway.mmb.list.filterData = function (g, i, j) {
        var h = app.amway.mmb.list.baseCollection.filter(function (l) {
            return l.get(i) === j
        });
        if (g === "osusowake" || g === "global") {
            var k = new app.amway.mmb.list.collection();
            k.reset(h);
            k.sortColumn = "prrt,ltmdt";
            k.sortDirection = "asc,desc";
            k.comparator = function (m, l) {
                if (!this.sortColumn) {
                    return 0
                }
                var p = this.sortColumn.split(","), o = this.sortDirection.split(","), n;
                n = _.find(p, function (q) {
                    return m.attributes[q] != l.attributes[q]
                });
                if (!n) {
                    return 0
                }
                if ((o[_.indexOf(p, n)] || "asc").toLowerCase() == "asc") {
                    return Number(m.attributes[n]) > Number(l.attributes[n]) ? 1 : -1
                } else {
                    return Number(m.attributes[n]) < Number(l.attributes[n]) ? 1 : -1
                }
            };
            k.sort();
            h = k.models
        }
        return h
    };
    app.amway.mmb.list.baseCollection;
    app.amway.mmb.list.dispCollection;
    app.amway.mmb.list.configModel
}());
var app = app || {};
app.amway = app.amway || {};
app.amway.mmb = app.amway.mmb || {};
app.amway.mmb.list = app.amway.mmb.list || {};
app.amway.mmb.list.template = app.amway.mmb.list.template || {};
Handlebars.registerHelper("getRedirectUrl", function (e, c, a, b, f) {
    if (e === "1" && a) {
        var h = "";
        var d = "/content/amway-today/container.html?CFC__target=";
        if (a.indexOf("?") < 0) {
            h = "?Campaign=" + b + "&PVView=" + f
        } else {
            h = "&Campaign=" + b + "&PVView=" + f
        }
        return new Handlebars.SafeString(d + encodeURIComponent(a + h))
    } else {
        var h = "";
        if (f !== "" && f != undefined) {
            h = "?PVView=" + f
        }
        if (app.amway.mmb.utils.usingAsApp()) {
            var g = window.location.protocol + "//" + window.location.host;
            return new Handlebars.SafeString("javascript:adobeDPS.dialogService.open('" + g + c + h + "');")
        } else {
            return new Handlebars.SafeString(c + h)
        }
    }
});
Handlebars.registerHelper("switchNewIconRanking", function (d) {
    if (!d || d.length < 8) {
        return new Handlebars.SafeString("")
    }
    var c = (new Date()).toDateString();
    var b, h, e, i, f;
    var g = 2 * 7;
    if (d !== null && d !== "") {
        h = d.substring(0, 4);
        e = d.substring(4, 6);
        i = d.substring(6, 8);
        var f = h + "/" + e + "/" + i;
        b = new Date(f)
    } else {
        b = new Date()
    }
    if (app.amway.mmb.utils.getTerm(b.toDateString(), c) <= g) {
        var a = '<span class="m-ranking-title-new">New</span>';
        return new Handlebars.SafeString(a)
    }
});
Handlebars.registerHelper("switchCategory", function (a) {
    if ("000001" === a) {
        return CQ.I18n.getMessage("asia-pac.japan.mmb.display-category-product")
    } else {
        if ("000002" === a) {
            return CQ.I18n.getMessage("asia-pac.japan.mmb.display-category-business")
        } else {
            if ("000003" === a) {
                return CQ.I18n.getMessage("asia-pac.japan.mmb.display-category-plaza")
            } else {
                if ("000004" === a) {
                    return CQ.I18n.getMessage("asia-pac.japan.mmb.display-category-system-maintenance")
                }
            }
        }
    }
});
Handlebars.registerHelper("formatTextByLength", function (c, b) {
    var a;
    if (c !== undefined) {
        a = app.amway.mmb.utils.textoverflow(c, b)
    } else {
        a = ""
    }
    return new Handlebars.SafeString(a)
});
Handlebars.registerHelper("formatDate", function (a) {
    var b;
    if (a !== undefined) {
        b = app.amway.mmb.utils.formatdate(a)
    } else {
        b = ""
    }
    return new Handlebars.SafeString(b)
});
setReadStatus = function (d, b, f) {
    var a = new app.amway.mmb.utils.CommunicationMessageModel();
    a.set("inum", d);
    a.set("mtp", b);
    a.set("msg", f);
    $.ajax({url: app.amway.mmb.list.SERVICE_URL, type: "POST", data: JSON.stringify(a), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (i, g, h) {
            console.log("updated read status successfully.")
        }, error: function (i, g, h) {
            console.log("updated read status failure." + h)
        }});
    var c = new Date();
    var e = c.getTime() + 500;
    while (true) {
        c = new Date();
        if (c.getTime() > e) {
            break
        }
    }
};
Handlebars.registerHelper("calendarDate", function (b, a, c) {
    var d = app.amway.mmb.utils.formateCalendarDate(b, c);
    if (a === "W" && (c === "1" || c === "2" || c === "3" || c === "4" || c === "5")) {
        return new Handlebars.SafeString('<p class="m-calendar-day">' + d + "</p>")
    } else {
        if ((a === "N" && (c === "1" || c === "2" || c === "3" || c === "4" || c === "5")) || c === "7") {
            return new Handlebars.SafeString('<p class="m-calendar-day m-calendar-day_red">' + d + "</p>")
        } else {
            if (c === "6") {
                return new Handlebars.SafeString('<p class="m-calendar-day  m-calendar-day_blue">' + d + "</p>")
            }
        }
    }
});
Handlebars.registerHelper("switchLabel", function (b, c) {
    if (!b || !c) {
        return""
    }
    var a = app.amway.mmb.utils.getEventLabel(b, c);
    return a
});
Handlebars.registerHelper("judgePriority", function (a) {
    if ("001" === a) {
        return new Handlebars.SafeString('<div class="m-news m-news_priority">')
    } else {
        return new Handlebars.SafeString('<div class="m-news">')
    }
});
Handlebars.registerHelper("campaign", function (a) {
    switch (a) {
        case"1":
            return new Handlebars.SafeString('<p class="m-news-campaign">' + CQ.I18n.getMessage("asia-pac.japan.mmb.campaign-in-action") + "</p>");
        case"2":
            return new Handlebars.SafeString('<p class="m-news-campaign m-news-campaign_end">' + CQ.I18n.getMessage("asia-pac.japan.mmb.campaign-in-closed") + "</p>");
        case"3":
            return new Handlebars.SafeString('<p class="m-news-campaign m-news-campaign_end">' + CQ.I18n.getMessage("asia-pac.japan.mmb.campaign-in-applied") + "</p>");
        default:
            return
    }
});
Handlebars.registerHelper("setimg", function (a) {
    if (a) {
        return new Handlebars.SafeString(a)
    } else {
        return new Handlebars.SafeString("/etc/designs/asia-pac/japan/amway-today/images/logo.png")
    }
});
var app = app || {};
app.amway = app.amway || {};
app.amway.mmb = app.amway.mmb || {};
app.amway.mmb.loginpanel = app.amway.mmb.loginpanel || {};
(function () {
    app.amway.mmb.loginpanel.model = Backbone.Model.extend({});
    app.amway.mmb.loginpanel.loginview = Backbone.View.extend({initialize: function (a) {
            _.bindAll(this, "render");
            this.model.bind("change", this.render);
            this.render()
        }, render: function () {
            var c = $("#login_template").html();
            var b = Handlebars.compile(c);
            var a = b(this.model.toJSON());
            this.$el.html(a)
        }});
    Date.prototype.Format = function (a) {
        var c = {"M+": this.getMonth() + 1, "d+": this.getDate(), "h+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds()};
        if (/(y+)/.test(a)) {
            a = a.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
        }
        for (var b in c) {
            if (new RegExp("(" + b + ")").test(a)) {
                a = a.replace(RegExp.$1, (RegExp.$1.length == 1) ? (c[b]) : (("00" + c[b]).substr(("" + c[b]).length)))
            }
        }
        return a
    };
    $(document).ready(function () {
        if (!$.cookie("awlvhtoken") && !$.cookie("awlvstoken")) {
            $(".urlForId").bind("click", function (a) {
                if (app.amway.mmb.utils.usingAsApp()) {
                    adobeDPS.dialogService.open($("#loginIDForgotUrl").val())
                } else {
                    window.location.href = $("#loginIDForgotUrl").val()
                }
            });
            $(".urlForPass").bind("click", function (a) {
                if (app.amway.mmb.utils.usingAsApp()) {
                    adobeDPS.dialogService.open($("#loginPassForgotUrl").val())
                } else {
                    window.location.href = $("#loginPassForgotUrl").val()
                }
            })
        }
        $(".systemmaintenance").bind("click", function (a) {
            if (app.amway.mmb.utils.usingAsApp()) {
                adobeDPS.dialogService.open($("#systemMaintenanceUrl").val())
            } else {
                window.location.href = $("#systemMaintenanceUrl").val()
            }
        });
        $("#loginbtn").click(function () {
            app.amway.mmb.utils.loginProcess($("#loginId").val(), $("#loginPass").val())
        });
        $("#logoutbtn").click(function () {
            app.amway.mmb.utils.logOutProcess()
        })
    })
}());
var app = app || {};
app.amway = app.amway || {};
app.amway.mmb = app.amway.mmb || {};
app.amway.mmb.rightloginpanel = app.amway.mmb.rightloginpanel || {};
(function () {
    app.amway.mmb.rightloginpanel.model = Backbone.Model.extend({});
    app.amway.mmb.rightloginpanel.loginview = Backbone.View.extend({initialize: function (a) {
            _.bindAll(this, "render");
            this.model.bind("change", this.render);
            this.render()
        }, render: function () {
            var c = $("#rightlogin_template").html();
            var b = Handlebars.compile(c);
            var a = b(this.model.toJSON());
            this.$el.html(a)
        }});
    Date.prototype.Format = function (a) {
        var c = {"M+": this.getMonth() + 1, "d+": this.getDate(), "h+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds()};
        if (/(y+)/.test(a)) {
            a = a.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
        }
        for (var b in c) {
            if (new RegExp("(" + b + ")").test(a)) {
                a = a.replace(RegExp.$1, (RegExp.$1.length == 1) ? (c[b]) : (("00" + c[b]).substr(("" + c[b]).length)))
            }
        }
        return a
    };
    $(document).ready(function () {
        if (!$.cookie("awlvhtoken") && !$.cookie("awlvstoken")) {
            $(".urlForIdRight").bind("click", function (a) {
                if (app.amway.mmb.utils.usingAsApp()) {
                    adobeDPS.dialogService.open($("#loginIDForgotSpUrl").val())
                } else {
                    window.location.href = $("#loginIDForgotSpUrl").val()
                }
            });
            $(".urlForPassRight").bind("click", function (a) {
                if (app.amway.mmb.utils.usingAsApp()) {
                    adobeDPS.dialogService.open($("#loginPassForgotSpUrl").val())
                } else {
                    window.location.href = $("#loginPassForgotSpUrl").val()
                }
            })
        }
        $(".systemmaintenanceRight").bind("click", function (a) {
            if (app.amway.mmb.utils.usingAsApp()) {
                adobeDPS.dialogService.open($("#systemMaintenanceUrl").val())
            } else {
                window.location.href = $("#systemMaintenanceUrl").val()
            }
        });
        $("#rightloginbtn").click(function () {
            app.amway.mmb.utils.loginProcess($("#rightloginId").val(), $("#rightloginPass").val())
        });
        $("#rightlogoutbtn").click(function () {
            app.amway.mmb.utils.logOutProcess()
        })
    })
}());
var app = app || {};
app.amway = app.amway || {};
app.amway.mmb = app.amway.mmb || {};
app.amway.mmb.todolist = app.amway.mmb.todolist || {};
(function () {
    app.amway.mmb.todolist.model = Backbone.Model.extend({});
    app.amway.mmb.todolist.collection = Backbone.Collection.extend({model: app.amway.mmb.todolist.model, localStorage: new Backbone.LocalStorage("B13ToDoMessageService.getToDoMessage"), clear: function () {
            this.localStorage._clear()
        }, split: function (f, h) {
            if (this.models.length === 0) {
                $("#todolist-header").remove();
                $(".m-todo.js-more").remove();
                return
            }
            var d = new Array();
            var i = new Array();
            var g = 0;
            _.each(this.models, function (j) {
                if (g < 5) {
                    d[g] = j
                } else {
                    i[g - 5] = j
                }
                g++
            });
            f.reset(d);
            if (i.length > 0) {
                var e = new app.amway.mmb.todolist.morebtnview({el: $(".m-todo.js-more")});
                e.setCtrlList(h, i);
                e.render()
            }
        }});
    app.amway.mmb.todolist.dispcollection = Backbone.Collection.extend({model: app.amway.mmb.todolist.model});
    app.amway.mmb.todolist.view = Backbone.View.extend({render: function () {
            var f = $("#todolist_template").html();
            var e = Handlebars.compile(f);
            var d = e(this.collection.toJSON());
            this.$el.html(d);
            $("a").bind("click", function (j) {
                var g = this.parentNode.children[0];
                var k = g.getAttribute("rdst");
                var h = g.getAttribute("msgid");
                var i = g.getAttribute("inum");
                if (k !== "1") {
                    app.amway.mmb.list.setReadStatus(i, "2", h)
                }
            })
        }, initialize: function () {
            this.collection.on("reset", this.render, this)
        }});
    app.amway.mmb.todolist.morebtnview = Backbone.View.extend({el: ".m-todo.js-more", events: {"click .m-todo-btn.js-more-btn": "onDisplayMore"}, initialize: function () {
        }, render: function () {
            this.$el.append('<p class="m-todo-btn js-more-btn">' + CQ.I18n.getMessage("asia-pac.japan.mmb.todolist-seemore") + '<span class="m-todo-btn-icn"></span></p>');
            return this
        }, setCtrlList: function (d, e) {
            this.ctrlCollection = d;
            this.ctrlModles = e
        }, onDisplayMore: function (d) {
            this.$(".m-todo-btn.js-more-btn").toggleClass("is-close");
            if (this.$(".m-todo-btn.js-more-btn").hasClass("is-close")) {
                $(".js-more-content").css("display", "block");
                this.ctrlCollection.reset(this.ctrlModles);
                this.$(".m-todo-btn.js-more-btn").html(CQ.I18n.getMessage("asia-pac.japan.mmb.todolist-close") + '<span class="m-todo-btn-icn"></span>')
            } else {
                $(".js-more-content").css("display", "none");
                this.$(".m-todo-btn.js-more-btn").html(CQ.I18n.getMessage("asia-pac.japan.mmb.todolist-seemore") + '<span class="m-todo-btn-icn"></span>')
            }
        }});
    Handlebars.registerHelper("todoItem", function (g, f, j, i, h, d) {
        var e = "";
        if (j == "") {
            j = 0
        }
        if (j === "1") {
            e = '<li class="m-todo-list-read"><span class="m-todo-list-link-icn"></span>'
        } else {
            e = '<li><span class="m-todo-list-icn" rdst=' + j + " inum=" + g + " msgid=" + f + "></span>"
        }
        i = app.amway.mmb.utils.textoverflow(i, 30);
        if ($($(".m-mobile")[0]).css("display") === "none") {
            e += '<a href="' + formatUrl(h) + '">' + i + "</a></li>"
        } else {
            e += '<a href="' + formatUrl(d) + '">' + i + "</a></li>"
        }
        return new Handlebars.SafeString(e)
    });
    formatUrl = function (d) {
        if (app.amway.mmb.utils.usingAsApp()) {
            return"javascript:adobeDPS.dialogService.open('" + d + "');"
        } else {
            return d
        }
    };
    app.amway.mmb.todolist.client;
    var b = new app.amway.mmb.todolist.collection();
    var a = new app.amway.mmb.todolist.dispcollection();
    var c = new app.amway.mmb.todolist.dispcollection();
    app.amway.mmb.list.setReadStatus = function (h, e, j) {
        var d = new app.amway.mmb.utils.CommunicationMessageModel();
        d.set("inum", h);
        d.set("mtp", e);
        var g = new Array();
        g[0] = j;
        d.set("msgs", g);
        $.ajax({url: app.amway.mmb.list.SERVICE_URL, type: "POST", data: JSON.stringify(d), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (m, k, l) {
                console.log("updated read status successfully.")
            }, error: function (m, k, l) {
                console.log("updated read status failure." + l)
            }});
        var f = new Date();
        var i = f.getTime() + 500;
        while (true) {
            f = new Date();
            if (f.getTime() > i) {
                break
            }
        }
    };
    app.amway.mmb.todolist.init = function (d, e) {
        if (parseInt(app.amway.mmb.utils.getPINLevel() ? app.amway.mmb.utils.getPINLevel() : "0") < 3 && !JSON.parse(e)) {
            $("#todolist-header").remove();
            $(".m-todo").remove();
            return
        }
        var f = new app.amway.mmb.todolist.model();
        f.set("inum", app.amway.mmb.utils.getDistId());
        $.ajax({url: d, type: "POST", data: JSON.stringify(f.toJSON()), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (i, g, h) {
                if (i.rc === "JMB0001" && i.tdmsgs.length > 0) {
                    localStorage.setItem("mmb.unreadMessagesCount", i.unrdmsgcnt);
                    if (localStorage.getItem("mmb.unreadMessagesCount") !== null && localStorage.getItem("mmb.unreadMessagesCount") !== "0") {
                        $("#circle").addClass("m-circle");
                        $("#circleLeft").addClass("m-circle m-circle_v2");
                        $("#circleBottom").addClass("m-circle");
                        $(".m-circle-num").html(localStorage.getItem("mmb.unreadMessagesCount"))
                    } else {
                        $("#circle").removeClass("m-circle");
                        $("#circleLeft").removeClass("m-circle m-circle_v2");
                        $("#circleBottom").removeClass("m-circle")
                    }
                    b.clear();
                    $.each(i.tdmsgs, function (j, k) {
                        k.inum = i.inum;
                        b.create(k)
                    });
                    app.amway.mmb.todolist.refreshListView()
                } else {
                    b.reset(new Array());
                    $("#todolist-header").remove();
                    $(".m-todo.js-more").remove()
                }
            }, error: function (i, g, h) {
                b.reset(new Array());
                $("#todolist-header").remove();
                $(".m-todo.js-more").remove()
            }})
    };
    app.amway.mmb.todolist.refreshListView = function (f) {
        var e = new app.amway.mmb.todolist.view({el: $(".m-todo-list")[0], collection: a});
        var d = new app.amway.mmb.todolist.view({el: $(".m-todo-list.js-more-content"), collection: c});
        var f = b.split(a, c)
    }
}());
var app = app || {};
app.amway = app.amway || {};
app.amway.mmb = app.amway.mmb || {};
app.amway.mmb.search = app.amway.mmb.search || {};
app.amway.mmb.searchresult = app.amway.mmb.searchresult || {};
(function () {
    app.amway.mmb.search.model = Backbone.Model.extend({});
    app.amway.mmb.searchresult.model = Backbone.Model.extend({});
    app.amway.mmb.search.SERVICE_URL_CAMPAIGN = "";
    app.amway.mmb.search.getMessage = function (h, f, g, j) {
        b.model.set("pageSize", j.get("pageSize"));
        var e = j.get("keyword");
        var i = e.replace(/ OR | NOT | AND |\+|\-|,|\.|!|"|#|\$|%|&|'|\(|\)|=|\||\\|{|}|\[|\]|<|>|\?|\/|＋|，|、|．|！|”|“|＄|％|＆|’|‘|\（|\）|\＝|\｜|\￥|｛|｝|【|】|＜|＞|？/g, " ");
        j.set("keyword", i);
        j.set("returnFields", ["id"]);
        $.ajax({url: f, type: "POST", data: JSON.stringify(j.toJSON()), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (n, k, m) {
                if (n.returnContents && JSON.parse(n.returnContents).numFound > 0 && n.returnContents.length > 0 && n.returnContents.indexOf('{"id":"') >= 0) {
                    if (dataLayer) {
                        dataLayer.page.detail = "results";
                        dataLayer.page.section = "search", dataLayer.page.category = "", dataLayer.page.subCategory = "";
                        dataLayer.search.keyword = n.keyword;
                        dataLayer.search.results = JSON.parse(n.returnContents).numFound
                    }
                    var l = n.returnContents.replace(/{"id":"/g, '{"mid":"');
                    var o = new app.amway.mmb.search.model();
                    o.set("dvd", "004");
                    o.set("inum", app.amway.mmb.utils.getDistId());
                    o.set("mvs", JSON.parse(l).queryResponse.nvPairs[3]);
                    b.model.set("resultCount", JSON.parse(l).numFound);
                    $.ajax({url: g, type: "POST", data: JSON.stringify(o.toJSON()), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (r, p, q) {
                            if (r.mvs && r.mvs.length > 0) {
                                h.reset(r.mvs)
                            } else {
                                h.reset(new Array())
                            }
                        }, error: function (r, p, q) {
                            h.reset(new Array())
                        }})
                } else {
                    if (!n.returnContents || (n.returnContents && JSON.parse(n.returnContents).numFound <= 0)) {
                        h.reset(new Array());
                        if (dataLayer) {
                            dataLayer.page.detail = "no-results";
                            dataLayer.page.section = "search", dataLayer.page.category = "", dataLayer.page.subCategory = "";
                            dataLayer.search.keyword = n.keyword;
                            dataLayer.search.results = "zero"
                        }
                    } else {
                        b.model.get("query").set("pageNumber", b.model.get("query").get("pageNumber") - 1)
                    }
                }
            }, error: function (m, k, l) {
                h.reset(new Array())
            }});
        j.set("keyword", e.replace(/&|<|>|"|' /g, " "))
    };
    app.amway.mmb.search.getsuggest = function (h, m, g, i, l, e, f, n, k) {
        var o;
        var j;
        if (JSON.parse(f)) {
            o = "left bottom";
            j = "left top"
        } else {
            o = "left top";
            j = "left bottom"
        }
        $("#" + h).find("." + m).first().autocomplete({delay: parseInt(l), minLength: parseInt(i), position: {my: o, at: j}, url: g, query: e, period: n, maxsgs: k})
    };
    var b;
    $.widget("mmb.searchButton", {defaultElement: "<input>", options: {url: null, rurl: null, keyword: null, query: null, result: null, pagingtype: null, pagingparameter: null, ctrlnavis: null}, _create: function () {
            this._on(this.element, {click: function (e) {
                    this._search(e)
                }})
        }, _search: function (e) {
            this.options.query.set("keyword", this.options.keyword.val());
            this.options.query.set("pageNumber", 0);
            app.amway.mmb.search.searchMessage(this.options.keyword, this.options.url, this.options.rurl, this.options.query, this.options.pagingtype, this.options.pagingparameter, this.options.result, this.options.ctrlnavis)
        }});
    $.widget("mmb.searchEnter", {defaultElement: "<input>", options: {url: null, rurl: null, keyword: null, query: null, result: null, pagingtype: null, pagingparameter: null, ctrlnavis: null}, _create: function () {
            this._on(this.element, {keydown: function (e) {
                    if (e && e.keyCode == 13) {
                        this._search(e)
                    }
                }})
        }, _search: function (e) {
            this.options.query.set("keyword", this.options.keyword.val());
            this.options.query.set("pageNumber", 0);
            app.amway.mmb.search.searchMessage(this.options.keyword, this.options.url, this.options.rurl, this.options.query, this.options.pagingtype, this.options.pagingparameter, this.options.result, this.options.ctrlnavis);
            $(".m-header-search-input").blur()
        }});
    app.amway.mmb.search.searchMessage = function (i, e, g, j, k, l, m, f) {
        var h = new app.amway.mmb.searchresult.model();
        h.set("url", e);
        h.set("rurl", g);
        h.set("query", j);
        h.set("pagingtype", k);
        h.set("pagingparameter", l);
        app.amway.mmb.searchresult.dispCollection = new app.amway.mmb.searchresult.collection(app.amway.mmb.searchresult.ctrlCollection);
        b = new app.amway.mmb.searchresult.view({el: m, model: h, collection: app.amway.mmb.searchresult.dispCollection});
        app.amway.mmb.search.getMessage(app.amway.mmb.searchresult.ctrlCollection, e, g, j);
        $.each(jQuery.parseJSON(f), function (o, n) {
            $.each($("." + n).find("li"), function (p, q) {
                $(q).removeClass("is-active")
            })
        })
    };
    app.amway.mmb.search.searchaction = function (g, j, f, i, k, m, l, n, h, e) {
        app.amway.mmb.search.SERVICE_URL_CAMPAIGN = i;
        $("#" + g).find("." + k).first().searchButton({url: j, rurl: f, keyword: $("#" + g).find("." + l).first(), query: e, result: $("." + m), pagingparameter: n, ctrlnavis: h});
        $("#" + g).find(".m-header-search-input").first().searchEnter({url: j, rurl: f, keyword: $("#" + g).find("." + l).first(), query: e, result: $("." + m), pagingparameter: n, ctrlnavis: h})
    };
    app.amway.mmb.searchresult.collection = Backbone.Collection.extend({model: app.amway.mmb.searchresult.model, initialize: function (e) {
            this.ctrlCollection = e;
            if (this.ctrlCollection) {
                this.ctrlCollection.on("reset", this.getCategory, this)
            }
        }, getCategory: function () {
            if (this.ctrlCollection) {
                this.reset(this.ctrlCollection.models)
            }
        }});
    var c = ("ontouchstart" in window);
    var a = 0;
    var d = "middle";
    app.amway.mmb.searchresult.view = Backbone.View.extend({render: function () {
            var g = $("#searchresult_template").html();
            var f = Handlebars.compile(g);
            var e;
            var h = this;
            if (this.collection.models.length === 0) {
                e = f(this.collection.toJSON());
                this.$el.html(e);
                $(this.$el.children()[0]).html(CQ.I18n.getMessage("asia-pac.japan.mmb.nonsearchresult", [this.model.get("query").get("keyword")]))
            } else {
                e = f(this.collection.toJSON());
                this.$el.html(e);
                $(this.$el.children()[0]).html(CQ.I18n.getMessage("asia-pac.japan.mmb.searchresulttitle", [this.model.get("query").get("keyword"), b.model.get("resultCount")]))
            }
            $(".m-news-text").bind("click", function (n) {
                var j = this.parentNode.parentNode;
                var k = j.getAttribute("campaignStatus");
                var i = j.getAttribute("campaignId");
                var l = j.getAttribute("mid");
                var m = app.amway.mmb.utils.getDistId();
                if (k === "1") {
                    app.amway.mmb.list.setCampaign(m, l, i)
                }
            });
            window.scrollTo(1, 1)
        }, initialize: function () {
            this.collection.on("reset", this.render, this);
            this.lastScrollTop = 0;
            this.$el.bind("touchstart mousedown", this.start);
            this.$el.bind("touchmove mousemove", this.move);
            this.$el.bind("touchend mouseup", this.end)
        }, start: function (f) {
            this.pageX = (c ? event.changedTouches[0].pageX : f.pageX);
            this.pageY = (c ? event.changedTouches[0].pageY : f.pageY);
            this.left = $(this).position().left;
            this.top = $(this).position().top;
            this.touched = true;
            a = this.pageY
        }, move: function (g) {
            if (!this.touched) {
                return
            }
            this.left = this.left - (this.pageX - (c ? event.changedTouches[0].pageX : g.pageX));
            this.top = this.top - (this.pageY - (c ? event.changedTouches[0].pageY : g.pageY));
            $(this).css({left: this.left, top: this.top});
            this.pageX = (c ? event.changedTouches[0].pageX : g.pageX);
            this.pageY = (c ? event.changedTouches[0].pageY : g.pageY);
            var f = this.pageY - a;
            if ((d === "bottom" && f > 0) || (d === "head" && f < 0)) {
                d = "middle"
            }
            if (d !== "middle") {
                if (d === "bottom" && ($(window).scrollTop() + $(window).height() < $(document).height())) {
                    d = "middle"
                } else {
                    g.preventDefault()
                }
            }
        }, end: function (f) {
            if (!this.touched) {
                return
            }
            this.touched = false;
            this.pageY = (c ? event.changedTouches[0].pageY : f.pageY);
            if (d !== "middle" && document.readyState === "complete") {
                if ($(window).scrollTop() + $(window).height() >= $(document).height() && this.pageY - a < 0 && b.model.get("resultCount") > 0) {
                    if (b.model.get("pageSize") * (b.model.get("query").get("pageNumber") + 1) < b.model.get("resultCount")) {
                        b.model.get("query").set("pageNumber", b.model.get("query").get("pageNumber") + 1);
                        app.amway.mmb.search.getMessage(app.amway.mmb.searchresult.ctrlCollection, b.model.get("url"), b.model.get("rurl"), b.model.get("query"));
                        d = "middle"
                    }
                } else {
                    if ($(window).scrollTop() <= 0 && this.pageY - a > 0) {
                        if (b.model.get("query").get("pageNumber") > 0) {
                            b.model.get("query").set("pageNumber", b.model.get("query").get("pageNumber") - 1);
                            app.amway.mmb.search.getMessage(app.amway.mmb.searchresult.ctrlCollection, b.model.get("url"), b.model.get("rurl"), b.model.get("query"))
                        }
                        d = "middle"
                    }
                }
            }
        }});
    $(window).scroll(function () {
        if ($(document).height() > $(window).height()) {
            if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
                d = "bottom"
            } else {
                if ($(window).scrollTop() <= 0) {
                    d = "head"
                } else {
                    d = "middle"
                }
            }
        } else {
            d = "true"
        }
    });
    Handlebars.registerHelper("switchNewIcon", function (f) {
        if (!f || f.length < 8) {
            return new Handlebars.SafeString("")
        }
        var g = (new Date()).toDateString();
        var h, i, k, e, j;
        var l = 2 * 7;
        if (f !== null && f !== "") {
            i = f.substring(0, 4);
            k = f.substring(4, 6);
            e = f.substring(6, 8);
            j = i + "/" + k + "/" + e;
            h = new Date(j)
        } else {
            h = new Date()
        }
        if (app.amway.mmb.utils.getTerm(h.toDateString(), g) <= l) {
            return new Handlebars.SafeString('<span class="m-news-title-new">New</span>')
        }
    });
    Handlebars.registerHelper("judgePriority", function (e) {
        if ("001" === e) {
            return new Handlebars.SafeString('<div class="m-news m-news_priority">')
        } else {
            return new Handlebars.SafeString('<div class="m-news">')
        }
    });
    Handlebars.registerHelper("switchCategory", function (e) {
        if ("000001" === e) {
            return CQ.I18n.getMessage("asia-pac.japan.mmb.display-category-product")
        } else {
            if ("000002" === e) {
                return CQ.I18n.getMessage("asia-pac.japan.mmb.display-category-business")
            } else {
                if ("000003" === e) {
                    return CQ.I18n.getMessage("asia-pac.japan.mmb.display-category-plaza")
                } else {
                    if ("000004" === e) {
                        return CQ.I18n.getMessage("asia-pac.japan.mmb.display-category-system-maintenance")
                    }
                }
            }
        }
    });
    Handlebars.registerHelper("campaign", function (e) {
        switch (e) {
            case"1":
                return new Handlebars.SafeString('<p class="m-news-campaign">' + CQ.I18n.getMessage("asia-pac.japan.mmb.campaign-in-action") + "</p>");
            case"2":
                return new Handlebars.SafeString('<p class="m-news-campaign m-news-campaign_end">' + CQ.I18n.getMessage("asia-pac.japan.mmb.campaign-in-closed") + "</p>");
            case"3":
                return new Handlebars.SafeString('<p class="m-news-campaign m-news-campaign_end">' + CQ.I18n.getMessage("asia-pac.japan.mmb.campaign-in-applied") + "</p>");
            default:
                return
        }
    });
    Handlebars.registerHelper("formatTextByLength", function (f, e) {
        return new Handlebars.SafeString(app.amway.mmb.utils.textoverflow(f, e))
    });
    app.amway.mmb.list.setCampaign = function (h, g, f) {
        var e = new app.amway.mmb.utils.CommunicationMessageModel();
        e.set("inum", h);
        e.set("mid", g);
        e.set("cpid", f);
        $.ajax({url: app.amway.mmb.list.SERVICE_URL_CAMPAIGN, type: "POST", async: false, data: JSON.stringify(e), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (k, i, j) {
                console.log("updated campaign successfully.")
            }, error: function (k, i, j) {
                console.log("updated campaign failure." + j)
            }})
    };
    app.amway.mmb.searchresult.ctrlCollection = new app.amway.mmb.searchresult.collection();
    app.amway.mmb.searchresult.dispCollection = new app.amway.mmb.searchresult.collection(app.amway.mmb.searchresult.ctrlCollection)
}());
var app = app || {};
app.amway = app.amway || {};
app.amway.mmb = app.amway.mmb || {};
app.amway.mmb.menuleft = app.amway.mmb.menuleft || {};
(function () {
    $(document).ready(function () {
        var a = $(".m-side-nav-filter");
        $.each(a, function (b, c) {
            $(c).click(function () {
                if ($(".m-circle-wrap.is-active").length === 0) {
                    $(location).attr("href", "/content/amway-today/news-category-all.html?category=" + this.getAttribute("category"))
                } else {
                    $.each(a, function (e, f) {
                        $(f).removeClass("is-active")
                    });
                    $(this).toggleClass("is-active");
                    var d = $(".m-side-nav-filter.is-active")[0].getAttribute("category");
                    app.amway.mmb.list.refreshListView(app.amway.mmb.list.filterData("", "mctdv", d));
                    if ($("body").hasClass("js-menu-sidr-left-open")) {
                        $.sidr("close", "js-menu-sidr-left")
                    }
                }
            })
        });
        if (localStorage.getItem("mmb.unreadMessagesCount") !== null && localStorage.getItem("mmb.unreadMessagesCount") !== "0") {
            $("#circle").addClass("m-circle");
            $("#circleLeft").addClass("m-circle m-circle_v2");
            $("#circleBottom").addClass("m-circle");
            $(".m-circle-num").html(localStorage.getItem("mmb.unreadMessagesCount"))
        } else {
            $("#circle").removeClass("m-circle");
            $("#circleLeft").removeClass("m-circle m-circle_v2");
            $("#circleBottom").removeClass("m-circle")
        }
    })
}());
var app = app || {};
app.amway = app.amway || {};
app.amway.mmb = app.amway.mmb || {};
app.amway.mmb.pushsettings = app.amway.mmb.pushsettings || {};
(function () {
    var j = "";
    var d = "";
    var n = "111";
    var a = "111111111111111111111111111111111111111111111111";
    var f = "1";
    var g = "0";
    var l = " ";
    function k() {
        $.ajax({url: $("#getPushSettingsUrl").val(), type: "POST", async: false, data: JSON.stringify({inum: app.amway.mmb.utils.getDistId()}), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (q, o, p) {
                if (q.rc === app.amway.mmb.utils.RETURN_CODE_SUCCESS) {
                    j = (q.pctg === null || q.pctg === undefined) ? "" : q.pctg;
                    d = (q.pa === null || q.pa === undefined) ? "" : q.pa
                }
            }, error: function (q, o, p) {
            }})
    }
    function h() {
        var o = $(".m-setting-title").length;
        if (o != 0) {
            k();
            e();
            $("form").submit(function (p) {
                b()
            })
        }
    }
    function e() {
        var s;
        var r;
        if ((j.indexOf(f) === -1) && (d.indexOf(f) === -1)) {
            s = n;
            r = a
        } else {
            s = j;
            r = d
        }
        for (var p = 0;
                p < 3;
                p++) {
            var q = 'input[name="selected_CATEGORY' + (p + 1) + '"]';
            s.charAt(p) === f ? $(q).attr("class", "is-active") : $(q).removeAttr("class")
        }
        for (var p = 0;
                p < 48;
                p++) {
            var o = 'input[name="SELECTED_PREFECTURE' + (p + 1) + '"]';
            r.charAt(p) === f ? $(o).attr("class", "is-active") : $(o).removeAttr("class")
        }
    }
    function b() {
        var p = "";
        var s = "";
        for (var q = 0;
                q < 3;
                q++) {
            var o = g;
            if ($('input[name="selected_CATEGORY' + (q + 1) + '"]').hasClass("is-active")) {
                o = f
            }
            if (o === j.charAt(q)) {
                o = l
            }
            p += o
        }
        for (var q = 0;
                q < 48;
                q++) {
            var r = g;
            if ($('input[name="SELECTED_PREFECTURE' + (q + 1) + '"]').hasClass("is-active")) {
                r = f
            }
            if (r === d.charAt(q)) {
                r = l
            }
            s += r
        }
        m(p, s)
    }
    function m(p, q) {
        var o = "";
        if (app.amway.mmb.utils.usingAsApp()) {
            o = adobeDPS.deviceService.pushNotificationToken
        }
        $.ajax({url: $("#setPushSettingsUrl").val(), type: "POST", async: false, data: JSON.stringify({inum: app.amway.mmb.utils.getDistId(), pctg: p, pa: q, dtkn: o}), dataType: "json", contentType: "application/json; charset=utf-8", xhrFields: {withCredentials: "true"}, success: function (t, r, s) {
                console.log("setPushSettings succuss.")
            }, error: function (t, r, s) {
                console.log("setPushSettings encounter exception.")
            }})
    }
    app.amway.mmb.pushsettings.pushsettingsModel = Backbone.Model.extend({});
    app.amway.mmb.pushsettings.pushsettingsView = Backbone.View.extend({initialize: function (o) {
            _.bindAll(this, "render");
            this.model.bind("change", this.render);
            this.render();
            MSGB.settings();
            h()
        }, render: function () {
            var q = $("#pushsettings_template").html();
            var p = Handlebars.compile(q);
            if (parseInt(app.amway.mmb.utils.getPINLevel()) >= 3) {
                this.model.set("permission", true)
            } else {
                this.model.set("permission", false)
            }
            var o = p(this.model.toJSON());
            this.$el.html(o)
        }});
    function c() {
        var p = "";
        for (var q = 0;
                q < 3;
                q++) {
            var o = g;
            if ($('input[name="selected_CATEGORY' + (q + 1) + '"]').hasClass("is-active")) {
                o = f
            }
            p += o
        }
        return p
    }
    function i() {
        var q = "";
        for (var o = 0;
                o < 48;
                o++) {
            var p = g;
            if ($('input[name="SELECTED_PREFECTURE' + (o + 1) + '"]').hasClass("is-active")) {
                p = f
            }
            q += p
        }
        return q
    }
    app.amway.mmb.pushsettings.checkSettingChanged = function () {
        var o = c();
        var p = i();
        if ((j === o && d === p) || ("000" === o && "000000000000000000000000000000000000000000000000" === p)) {
            return false
        } else {
            return true
        }
    };
    app.amway.mmb.pushsettings.recoverToOriginalSetting = function () {
        var s = j;
        var r = d;
        for (var p = 0;
                p < 3;
                p++) {
            var q = 'input[name="selected_CATEGORY' + (p + 1) + '"]';
            s.charAt(p) === f ? $(q).attr("class", "is-active") : $(q).removeAttr("class")
        }
        for (var p = 0;
                p < 48;
                p++) {
            var o = 'input[name="SELECTED_PREFECTURE' + (p + 1) + '"]';
            r.charAt(p) === f ? $(o).attr("class", "is-active") : $(o).removeAttr("class")
        }
    }
}());