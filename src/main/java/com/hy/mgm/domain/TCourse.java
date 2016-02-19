/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.domain;

import java.io.Serializable;
import java.util.Collection;
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
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author hang
 */
@Entity
@Table(name = "t_course")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "TCourse.findAll", query = "SELECT t FROM TCourse t"),
    @NamedQuery(name = "TCourse.findByCourseid", query = "SELECT t FROM TCourse t WHERE t.courseid = :courseid"),
    @NamedQuery(name = "TCourse.findByCoursetitle", query = "SELECT t FROM TCourse t WHERE t.coursetitle = :coursetitle"),
    @NamedQuery(name = "TCourse.findByCoursetheme", query = "SELECT t FROM TCourse t WHERE t.coursetheme = :coursetheme"),
    @NamedQuery(name = "TCourse.findByCoursetype", query = "SELECT t FROM TCourse t WHERE t.coursetype = :coursetype"),
    @NamedQuery(name = "TCourse.findBySdate", query = "SELECT t FROM TCourse t WHERE t.sdate = :sdate"),
    @NamedQuery(name = "TCourse.findByEdate", query = "SELECT t FROM TCourse t WHERE t.edate = :edate"),
    @NamedQuery(name = "TCourse.findByLocation", query = "SELECT t FROM TCourse t WHERE t.location = :location"),
    @NamedQuery(name = "TCourse.findByMaxcomp", query = "SELECT t FROM TCourse t WHERE t.maxcomp = :maxcomp"),
    @NamedQuery(name = "TCourse.findByMaxstudent", query = "SELECT t FROM TCourse t WHERE t.maxstudent = :maxstudent"),
    @NamedQuery(name = "TCourse.findByDeliverdate", query = "SELECT t FROM TCourse t WHERE t.deliverdate = :deliverdate"),
    @NamedQuery(name = "TCourse.findByDisttype", query = "SELECT t FROM TCourse t WHERE t.disttype = :disttype")})
public class TCourse implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "courseid")
    private Integer courseid;
    @Size(max = 256)
    @Column(name = "coursetitle")
    private String coursetitle;
    @Size(max = 512)
    @Column(name = "coursetheme")
    private String coursetheme;
    @Column(name = "coursetype")
    private Integer coursetype;
    @Column(name = "sdate")
    @Temporal(TemporalType.DATE)
    private Date sdate;
    @Column(name = "edate")
    @Temporal(TemporalType.DATE)
    private Date edate;
    @Size(max = 64)
    @Column(name = "location")
    private String location;
    @Column(name = "maxcomp")
    private Short maxcomp;
    @Column(name = "maxstudent")
    private Short maxstudent;
    @Column(name = "deliverdate")
    @Temporal(TemporalType.DATE)
    private Date deliverdate;
    @Column(name = "disttype")
    private Short disttype;
    @OneToMany(mappedBy = "courseid")
    private Collection<TSchedule> tScheduleCollection;
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    @ManyToOne
    private MUser userid;

    public TCourse() {
    }

    public TCourse(Integer courseid) {
        this.courseid = courseid;
    }

    public Integer getCourseid() {
        return courseid;
    }

    public void setCourseid(Integer courseid) {
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

    public Integer getCoursetype() {
        return coursetype;
    }

    public void setCoursetype(Integer coursetype) {
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

    public Short getMaxcomp() {
        return maxcomp;
    }

    public void setMaxcomp(Short maxcomp) {
        this.maxcomp = maxcomp;
    }

    public Short getMaxstudent() {
        return maxstudent;
    }

    public void setMaxstudent(Short maxstudent) {
        this.maxstudent = maxstudent;
    }

    public Date getDeliverdate() {
        return deliverdate;
    }

    public void setDeliverdate(Date deliverdate) {
        this.deliverdate = deliverdate;
    }

    public Short getDisttype() {
        return disttype;
    }

    public void setDisttype(Short disttype) {
        this.disttype = disttype;
    }

    @XmlTransient
    public Collection<TSchedule> getTScheduleCollection() {
        return tScheduleCollection;
    }

    public void setTScheduleCollection(Collection<TSchedule> tScheduleCollection) {
        this.tScheduleCollection = tScheduleCollection;
    }

    public MUser getUserid() {
        return userid;
    }

    public void setUserid(MUser userid) {
        this.userid = userid;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (courseid != null ? courseid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof TCourse)) {
            return false;
        }
        TCourse other = (TCourse) object;
        if ((this.courseid == null && other.courseid != null) || (this.courseid != null && !this.courseid.equals(other.courseid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.hy.mgm.domain.TCourse[ courseid=" + courseid + " ]";
    }
    
}
