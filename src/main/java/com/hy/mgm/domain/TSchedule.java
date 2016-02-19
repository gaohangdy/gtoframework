/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.domain;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author hang
 */
@Entity
@Table(name = "t_schedule")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "TSchedule.findAll", query = "SELECT t FROM TSchedule t"),
    @NamedQuery(name = "TSchedule.findByTaskid", query = "SELECT t FROM TSchedule t WHERE t.taskid = :taskid"),
    @NamedQuery(name = "TSchedule.findBySdate", query = "SELECT t FROM TSchedule t WHERE t.sdate = :sdate"),
    @NamedQuery(name = "TSchedule.findByEdate", query = "SELECT t FROM TSchedule t WHERE t.edate = :edate"),
    @NamedQuery(name = "TSchedule.findByContent", query = "SELECT t FROM TSchedule t WHERE t.content = :content")})
public class TSchedule implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "taskid")
    private Integer taskid;
    @Column(name = "sdate")
    @Temporal(TemporalType.DATE)
    private Date sdate;
    @Column(name = "edate")
    @Temporal(TemporalType.DATE)
    private Date edate;
    @Size(max = 1024)
    @Column(name = "content")
    private String content;
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    @ManyToOne
    private MUser userid;
    @JoinColumn(name = "courseid", referencedColumnName = "courseid")
    @ManyToOne
    private TCourse courseid;

    public TSchedule() {
    }

    public TSchedule(Integer taskid) {
        this.taskid = taskid;
    }

    public Integer getTaskid() {
        return taskid;
    }

    public void setTaskid(Integer taskid) {
        this.taskid = taskid;
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public MUser getUserid() {
        return userid;
    }

    public void setUserid(MUser userid) {
        this.userid = userid;
    }

    public TCourse getCourseid() {
        return courseid;
    }

    public void setCourseid(TCourse courseid) {
        this.courseid = courseid;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (taskid != null ? taskid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof TSchedule)) {
            return false;
        }
        TSchedule other = (TSchedule) object;
        if ((this.taskid == null && other.taskid != null) || (this.taskid != null && !this.taskid.equals(other.taskid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.hy.mgm.domain.TSchedule[ taskid=" + taskid + " ]";
    }
    
}
