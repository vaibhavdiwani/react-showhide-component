import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

export default class ReactShowHideComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingViewMore: false
    };

    this.toggleShowingViewMore = this.toggleShowingViewMore.bind(this);
  }

  toggleShowingViewMore(event) {
    this.setState({showingViewMore: !this.state.showingViewMore});
  }

  render() {
    const {items, minItems, mode, viewMoreButton, viewLessButton, parentClasses} = this.props;
    const {showingViewMore} = this.state;

    if (mode && mode.toLowerCase() === 'string') {
    const viewMoreButtonHtml = <span key={`view-more-parent-${Math.random() * 1000}`} onClick={this.toggleShowingViewMore}>{viewMoreButton}</span>;

    const viewLessButtonHtml = <span key={`view-more-parent-${Math.random() * 1000}`} onClick={this.toggleShowingViewMore}>{viewLessButton}</span>;
      return (
        <div className={parentClasses}>
          <Truncate
            lines={!showingViewMore && minItems}
            ellipsis={viewMoreButtonHtml}
          >
            {items}
        </Truncate>
        {showingViewMore && viewLessButtonHtml}
        </div>
      );
    }

    const listHtml = items.map((elem, i) => {
      if (!showingViewMore) {
        if(i < minItems) {
          return elem;
        }
      } else {
        return elem;
      }
    });

    if (minItems < items.length) {
      if (showingViewMore) {
        listHtml.push(<div key={`view-more-parent-${Math.random() * 1000}`} onClick={this.toggleShowingViewMore}>{viewLessButton}</div>);
      } else {
        listHtml.push(<div key={`view-more-parent-${Math.random() * 1000}`} onClick={this.toggleShowingViewMore}>{viewMoreButton}</div>);
      }
    }
    return (
      <div className={parentClasses}>{listHtml}</div>
    );


  }
}

ReactShowHideComponent.defaultProps = {
  mode: 'array',
  viewMoreButton: <div key={`view-more-${Math.random() * 1000}`}>View More</div>,
  viewLessButton: <div key={`view-less-${Math.random() * 1000}`}>View Less</div>,
};

ReactShowHideComponent.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  minItems: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  viewMoreButton: PropTypes.element,
  viewLessButton: PropTypes.element
};