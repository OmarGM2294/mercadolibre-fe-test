import styles from '../../styles/components/Breadcrumb.module.scss'

const Breadcrumb = (props) => (
  <div className={styles.breadcrumb}>
    { props.data.map((category, index) => (
      <div className={styles.container} key={index}>
        <span>
          { category }
        </span>
        <>      
          { props.data.length -1 !== index ?
            <span className={styles.separator}>
              { '>' }
            </span>
          : null }
        </>
      </div>
    )) }
  </div>
)

export default Breadcrumb