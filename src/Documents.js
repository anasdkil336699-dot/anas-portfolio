/* شبكة البطاقات */
.doc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

/* شكل البطاقة */
.doc-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: 0.2s;
}

/* تأثير hover */
.doc-card:hover {
  transform: translateY(-5px);
}

/* الأيقونة */
.doc-card span {
  font-size: 40px;
  display: block;
  margin-bottom: 10px;
}

/* اسم الملف */
.doc-card p {
  font-weight: bold;
  margin-bottom: 10px;
}

/* زر */
.doc-card a {
  display: inline-block;
  padding: 8px 12px;
  background: #0b5ed7;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.doc-card a:hover {
  background: #084298;
}
