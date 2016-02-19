/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.page;

import java.util.Date;

/**
 *
 * @author hang
 */
public class CoursePage {

    private int courseid;
    private String coursetitle;
    private String coursetheme;
    private int coursetype;
    private Date sdate;
    private Date edate;
    private String location;
    private int maxcomp;
    private int maxstudent;
    private int teacher;
    private String teachername;

    public int getCourseid() {
        return courseid;
    }

    public void setCourseid(int courseid) {
        this.courseid = courseid;
    }

    public String getCoursetitle() {
        return coursetitle;
    }

    public void setCoursetitle(String coursetitle) {
        this.coursetitle = coursetitle;
    }

    public String getCoursetheme() {
        return coursetheme;
    }

    public void setCoursetheme(String coursetheme) {
        this.coursetheme = coursetheme;
    }

    public int getCoursetype() {
        return coursetype;
    }

    public void setCoursetype(int coursetype) {
        this.coursetype = coursetype;
    }

    public Date getSdate() {
        return sdate;
    }

    public void setSdate(Date sdate) {
        this.sdate = sdate;
    }

    public Date getEdate() {
        return edate;
    }

    public void setEdate(Date edate) {
        this.edate = edate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getMaxcomp() {
        return maxcomp;
    }

    public void setMaxcomp(int maxcomp) {
        this.maxcomp = maxcomp;
    }

    public int getMaxstudent() {
        return maxstudent;
    }

    public void setMaxstudent(int maxstudent) {
        this.maxstudent = maxstudent;
    }

    public int getTeacher() {
        return teacher;
    }

    public void setTeacher(int teacher) {
        this.teacher = teacher;
    }

    public String getTeachername() {
        return teachername;
    }

    public void setTeachername(String teachername) {
        this.teachername = teachername;
    }

}
